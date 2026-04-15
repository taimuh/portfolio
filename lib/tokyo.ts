import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

export interface RecommendationItem {
  name: string;
  description: string;
  area: string;
  tags: string[];
  date?: string;
  imageQuery: string;
}

export interface TokyoRecommendations {
  season: string;
  lastUpdated: string;
  spots: RecommendationItem[];
  gourmet: RecommendationItem[];
  events: RecommendationItem[];
}

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return "春";
  if (month >= 6 && month <= 8) return "夏";
  if (month >= 9 && month <= 11) return "秋";
  return "冬";
}

async function searchTavily(query: string): Promise<string> {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) throw new Error("TAVILY_API_KEY is not set");

  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: "basic",
      max_results: 5,
    }),
  });

  if (!response.ok) {
    throw new Error(`Tavily API error: ${response.status}`);
  }

  const data = await response.json();
  return (data.results as { title: string; content: string }[])
    .map((r) => `${r.title}: ${r.content}`)
    .join("\n\n");
}

function buildPrompt(
  dateStr: string,
  season: string,
  spotsRaw: string,
  gourmetRaw: string,
  eventsRaw: string
): string {
  return `あなたは東京の観光・グルメ・イベント情報のエキスパートです。
以下のWeb検索結果をもとに、現在の東京のおすすめ情報をJSON形式でまとめてください。

【現在の日付】${dateStr}
【季節】${season}

【スポット検索結果】
${spotsRaw}

【グルメ検索結果】
${gourmetRaw}

【イベント検索結果】
${eventsRaw}

以下のJSON形式で、各カテゴリ3件ずつ出力してください。JSONのみ出力し、説明文は不要です。

{
  "season": "${season}",
  "lastUpdated": "${dateStr}",
  "spots": [
    { "name": "スポット名", "description": "100字以内の説明", "area": "エリア名", "tags": ["タグ1", "タグ2"], "imageQuery": "english keywords for unsplash image search" }
  ],
  "gourmet": [
    { "name": "店名または料理名", "description": "100字以内の説明", "area": "エリア名", "tags": ["タグ1", "タグ2"], "imageQuery": "english keywords for unsplash image search" }
  ],
  "events": [
    { "name": "イベント名", "description": "100字以内の説明", "area": "エリア名", "tags": ["タグ1", "タグ2"], "date": "開催日または期間", "imageQuery": "english keywords for unsplash image search" }
  ]
}`;
}

function parseRecommendationsJson(text: string): TokyoRecommendations {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Could not extract JSON from response");
  }
  return JSON.parse(jsonMatch[0]) as TokyoRecommendations;
}

async function generateWithClaude(prompt: string): Promise<string> {
  const client = new Anthropic();
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });
  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type from Claude API");
  }
  return content.text;
}

async function generateWithCopilot(prompt: string): Promise<string> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not set");

  // GitHub Models API (github.com/marketplace/models)
  const response = await fetch(
    "https://models.inference.ai.azure.com/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        max_tokens: 2048,
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub Models API error: ${response.status} ${body}`);
  }

  const data = await response.json();
  return data.choices[0].message.content as string;
}

export async function fetchTokyoRecommendations(): Promise<TokyoRecommendations> {
  if (process.env.NODE_ENV === "development") {
    const mockPath = path.join(process.cwd(), "content/lab/tokyo-mock.json");
    const mockData = fs.readFileSync(mockPath, "utf8");
    return JSON.parse(mockData) as TokyoRecommendations;
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const season = getSeason(month);
  const dateStr = now.toISOString().split("T")[0];

  const [spotsRaw, gourmetRaw, eventsRaw] = await Promise.all([
    searchTavily(`東京 おすすめ観光スポット ${season} ${now.getFullYear()}`),
    searchTavily(`東京 グルメ おすすめ ${season} ${now.getFullYear()}`),
    searchTavily(`東京 イベント ${month}月 ${now.getFullYear()}`),
  ]);

  const prompt = buildPrompt(dateStr, season, spotsRaw, gourmetRaw, eventsRaw);

  let rawText: string;
  try {
    rawText = await generateWithClaude(prompt);
  } catch (e) {
    console.warn("Claude API failed, falling back to GitHub Copilot:", e);
    rawText = await generateWithCopilot(prompt);
  }

  return parseRecommendationsJson(rawText);
}
