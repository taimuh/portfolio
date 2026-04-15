import React from "react";
import { unstable_cache } from "next/cache";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { fetchTokyoRecommendations, RecommendationItem } from "@/lib/tokyo";

// APIキーが必要なためビルド時の静的生成をスキップし、リクエスト時に動的レンダリングする
export const dynamic = "force-dynamic";

const getRecommendations = unstable_cache(
  fetchTokyoRecommendations,
  ["tokyo-recommendations"],
  { revalidate: 86400 }
);

const SECTION_COLORS = {
  スポット: { primary: "#00F5FF", secondary: "rgba(0,245,255,0.15)" },
  グルメ: { primary: "#FF2D78", secondary: "rgba(255,45,120,0.15)" },
  イベント: { primary: "#BF5FFF", secondary: "rgba(191,95,255,0.15)" },
} as const;

export default async function TokyoLabPage() {
  const data = await getRecommendations();

  return (
    <div style={{ background: "#050510", minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <TokyoSkyline />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,5,16,0.3) 0%, rgba(5,5,16,0.0) 40%, rgba(5,5,16,0.9) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={BADGE_STYLES.experimental}>Experimental</span>
            <span style={BADGE_STYLES.season}>{data.season}</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.2em",
              color: "#00F5FF",
              textShadow:
                "0 0 20px #00F5FF, 0 0 50px #00F5FF, 0 0 100px rgba(0,245,255,0.5)",
              margin: 0,
            }}
          >
            TOKYO
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginTop: "0.75rem",
              fontSize: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            東京のおすすめスポット・グルメ・イベントを季節や最新の話題をもとに毎日更新しています。
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
            最終更新: {data.lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <main style={{ padding: "4rem 0 6rem" }}>
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <Section title="スポット" items={data.spots} />
          <Section title="グルメ" items={data.gourmet} />
          <Section title="イベント" items={data.events} showDate />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  items,
  showDate = false,
}: {
  title: string;
  items: RecommendationItem[];
  showDate?: boolean;
}) {
  const color =
    SECTION_COLORS[title as keyof typeof SECTION_COLORS] ??
    SECTION_COLORS["スポット"];

  return (
    <section style={{ marginBottom: "4rem" }}>
      {/* Section title with neon underline */}
      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: color.primary,
            textShadow: `0 0 15px ${color.primary}`,
            letterSpacing: "0.1em",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, ${color.primary}, transparent)`,
            width: "12rem",
            boxShadow: `0 0 8px ${color.primary}`,
          }}
        />
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {items.map((item, index) => (
          <NeonCard key={index} item={item} color={color} showDate={showDate} />
        ))}
      </div>
    </section>
  );
}

function NeonCard({
  item,
  color,
  showDate,
}: {
  item: RecommendationItem;
  color: { primary: string; secondary: string };
  showDate: boolean;
}) {
  const imageUrl = `https://source.unsplash.com/featured/800x450/?${encodeURIComponent(item.imageQuery)}`;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${color.primary}44`,
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: `0 0 20px ${color.primary}18, inset 0 0 20px rgba(255,255,255,0.02)`,
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          loading="lazy"
        />
        {/* Scanline overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: `linear-gradient(to top, rgba(5,5,16,0.95), transparent)`,
            pointerEvents: "none",
          }}
        />
        {/* Neon border bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: color.primary,
            boxShadow: `0 0 8px ${color.primary}`,
            opacity: 0.7,
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "1rem" }}>
        {/* Area / Date row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.4rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: color.primary,
              letterSpacing: "0.08em",
              textShadow: `0 0 8px ${color.primary}`,
            }}
          >
            {item.area}
          </span>
          {showDate && item.date && (
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>
              {item.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "0.4rem",
            lineHeight: 1.4,
          }}
        >
          {item.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            marginBottom: "0.75rem",
          }}
        >
          {item.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.65rem",
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: color.secondary,
                border: `1px solid ${color.primary}66`,
                color: color.primary,
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TokyoSkyline() {
  return (
    <svg
      viewBox="0 0 1440 380"
      preserveAspectRatio="xMidYMax slice"
      style={{ display: "block", width: "100%", height: "420px" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050510" />
          <stop offset="60%" stopColor="#0a0520" />
          <stop offset="100%" stopColor="#120830" />
        </linearGradient>
        <filter id="towerGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="skytreeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="groundGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF2D78" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF2D78" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1440" height="380" fill="url(#skyGrad)" />

      {/* Horizontal grid lines (scanlines) */}
      {[60, 100, 140, 180, 220, 260, 300].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="1440"
          y2={y}
          stroke="#00F5FF"
          strokeOpacity="0.04"
          strokeWidth="1"
        />
      ))}

      {/* Mt. Fuji (background) */}
      <polygon
        points="540,380 720,80 900,380"
        fill="#0d0628"
        opacity="0.8"
      />
      {/* Fuji snow cap */}
      <polygon
        points="682,130 720,80 758,130"
        fill="#1a0a3a"
        opacity="0.9"
      />

      {/* === Left buildings === */}
      <rect x="30" y="310" width="60" height="70" fill="#080818" />
      <rect x="100" y="295" width="50" height="85" fill="#080818" />
      <rect x="160" y="280" width="55" height="100" fill="#090820" />
      <rect x="225" y="270" width="65" height="110" fill="#080818" />
      <rect x="300" y="285" width="50" height="95" fill="#080818" />

      {/* Windows - left buildings */}
      {[340, 355, 370].map((y) =>
        [35, 50, 65, 75].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="6"
            height="5"
            fill="#FF2D78"
            opacity="0.5"
          />
        ))
      )}
      {[300, 315, 330].map((y) =>
        [228, 243, 258, 273].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="6"
            height="5"
            fill="#00F5FF"
            opacity="0.3"
          />
        ))
      )}

      {/* === Tokyo Tower (A-frame) x~400 === */}
      {/* Orange/red neon glow layer */}
      <polygon
        points="420,375 423,290 435,250 450,180 465,250 477,290 480,375"
        fill="#FF6B00"
        opacity="0.25"
        filter="url(#towerGlow)"
      />
      {/* Tower body */}
      <polygon
        points="422,375 425,295 437,252 450,185 463,252 475,295 478,375"
        fill="#1a0800"
      />
      {/* Tower legs detail */}
      <line x1="435" y1="375" x2="450" y2="185" stroke="#FF6B00" strokeWidth="1.5" opacity="0.7" />
      <line x1="465" y1="375" x2="450" y2="185" stroke="#FF6B00" strokeWidth="1.5" opacity="0.7" />
      {/* Cross braces */}
      <line x1="429" y1="330" x2="471" y2="330" stroke="#FF6B00" strokeWidth="1" opacity="0.5" />
      <line x1="432" y1="310" x2="468" y2="310" stroke="#FF6B00" strokeWidth="1" opacity="0.5" />
      {/* Observation deck */}
      <rect x="440" y="248" width="20" height="10" fill="#FF6B00" opacity="0.8" />
      {/* Top mast */}
      <line x1="450" y1="185" x2="450" y2="155" stroke="#FF6B00" strokeWidth="2" opacity="0.9" />
      <circle cx="450" cy="155" r="2" fill="#FF6B00" opacity="1" />
      {/* Neon accent dot on top */}
      <circle
        cx="450"
        cy="155"
        r="4"
        fill="#FF6B00"
        opacity="0.6"
        filter="url(#towerGlow)"
      />

      {/* === Center buildings (Shinjuku-ish) x=530-900 === */}
      <rect x="530" y="240" width="55" height="140" fill="#090820" />
      <rect x="595" y="210" width="70" height="170" fill="#080818" />
      <rect x="675" y="225" width="60" height="155" fill="#090820" />
      <rect x="745" y="195" width="80" height="185" fill="#080818" />
      <rect x="835" y="215" width="65" height="165" fill="#090820" />
      <rect x="910" y="250" width="55" height="130" fill="#080818" />

      {/* Windows - center buildings */}
      {[220, 235, 250, 265, 280].map((y) =>
        [600, 615, 630, 645, 655].map((x) => (
          <rect
            key={`c${x}-${y}`}
            x={x}
            y={y}
            width="5"
            height="4"
            fill="#00F5FF"
            opacity="0.35"
          />
        ))
      )}
      {[205, 220, 235, 250, 265].map((y) =>
        [752, 767, 782, 797, 808].map((x) => (
          <rect
            key={`d${x}-${y}`}
            x={x}
            y={y}
            width="5"
            height="4"
            fill="#BF5FFF"
            opacity="0.3"
          />
        ))
      )}

      {/* === Right buildings x=980-1090 === */}
      <rect x="980" y="265" width="50" height="115" fill="#080818" />
      <rect x="1040" y="285" width="45" height="95" fill="#090820" />

      {/* === Tokyo Skytree x~1130 === */}
      {/* Cyan glow */}
      <rect
        x="1120"
        y="55"
        width="30"
        height="325"
        fill="#00F5FF"
        opacity="0.1"
        filter="url(#skytreeGlow)"
      />
      {/* Skytree body - tapers slightly */}
      <polygon
        points="1118,380 1122,200 1126,100 1135,55 1144,100 1148,200 1152,380"
        fill="#050518"
      />
      {/* Skytree outline */}
      <polygon
        points="1118,380 1122,200 1126,100 1135,55 1144,100 1148,200 1152,380"
        fill="none"
        stroke="#00F5FF"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Lower observation deck */}
      <rect x="1113" y="215" width="44" height="12" fill="#001a1a" stroke="#00F5FF" strokeWidth="0.8" opacity="0.8" />
      {/* Upper observation deck */}
      <rect x="1116" y="180" width="38" height="10" fill="#001a1a" stroke="#00F5FF" strokeWidth="0.8" opacity="0.8" />
      {/* Broadcast tower */}
      <line x1="1135" y1="55" x2="1135" y2="20" stroke="#00F5FF" strokeWidth="1.5" opacity="0.9" />
      {/* Skytree tip glow */}
      <circle
        cx="1135"
        cy="20"
        r="5"
        fill="#00F5FF"
        opacity="0.9"
        filter="url(#skytreeGlow)"
      />
      {/* Skytree lights */}
      {[100, 140, 180].map((y) => (
        <circle key={y} cx="1135" cy={y} r="1.5" fill="#00F5FF" opacity="0.7" />
      ))}

      {/* === Far right buildings === */}
      <rect x="1175" y="280" width="55" height="100" fill="#080818" />
      <rect x="1240" y="295" width="60" height="85" fill="#090820" />
      <rect x="1310" y="310" width="70" height="70" fill="#080818" />
      <rect x="1390" y="325" width="50" height="55" fill="#090820" />

      {/* Ground neon line */}
      <rect x="0" y="377" width="1440" height="3" fill="url(#groundGlow)" />
      <rect
        x="0"
        y="376"
        width="1440"
        height="1"
        fill="#FF2D78"
        opacity="0.8"
      />
    </svg>
  );
}

const BADGE_STYLES = {
  experimental: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: 500,
    borderRadius: "9999px",
    background: "rgba(255,45,120,0.15)",
    border: "1px solid rgba(255,45,120,0.5)",
    color: "#FF2D78",
    letterSpacing: "0.05em",
    textShadow: "0 0 8px #FF2D78",
  },
  season: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: 500,
    borderRadius: "9999px",
    background: "rgba(191,95,255,0.15)",
    border: "1px solid rgba(191,95,255,0.5)",
    color: "#BF5FFF",
    letterSpacing: "0.05em",
    textShadow: "0 0 8px #BF5FFF",
  },
} as const;
