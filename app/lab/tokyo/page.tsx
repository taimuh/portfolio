import React from "react";
import { unstable_cache } from "next/cache";
import { Playfair_Display, Noto_Serif_JP, DM_Sans } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import { fetchTokyoRecommendations, RecommendationItem } from "@/lib/tokyo";
import { NeonCard } from "./neon-card";

// APIキーが必要なためビルド時の静的生成をスキップし、リクエスト時に動的レンダリングする
export const dynamic = "force-dynamic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const WARM = {
  ink: "#1a1410",
  paper: "#f7f3ee",
  red: "#c0392b",
  gold: "#b8975a",
  mist: "#8c8078",
  pale: "#ede8e0",
} as const;

const getRecommendations = unstable_cache(
  fetchTokyoRecommendations,
  ["tokyo-recommendations"],
  { revalidate: 86400 }
);

type SectionVariant = "spots" | "gourmet" | "events";

export default async function TokyoLabPage() {
  const data = await getRecommendations();

  return (
    <div
      className={`${playfair.variable} ${notoSerifJP.variable} ${dmSans.variable}`}
      style={{
        background: WARM.paper,
        minHeight: "100vh",
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontWeight: 300,
        color: WARM.ink,
      }}
    >
      <style>{`
        @keyframes tokyoScrollLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes tokyoMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tokyo-nav-links a:hover { color: #c0392b; }
        @media (max-width: 900px) {
          .tokyo-nav-links { display: none !important; }
          .tokyo-hero { grid-template-columns: 1fr !important; }
          .tokyo-hero-images { height: 50vh !important; min-height: unset !important; }
          .tokyo-hero-left { padding: 4rem 2rem !important; }
          .tokyo-hero-scroll-hint { display: none !important; }
          .tokyo-spots-grid { grid-template-columns: 1fr 1fr !important; }
          .tokyo-section { padding: 4rem 2rem !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.2rem 3rem",
          background: "rgba(247,243,238,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(184,151,90,0.2)`,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-noto-serif-jp), serif",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            color: WARM.red,
          }}
        >
          東京 TOKYO
        </div>
        <ul
          className="tokyo-nav-links"
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { label: "Spots",  href: "#spots" },
            { label: "Food",   href: "#gourmet" },
            { label: "Events", href: "#events" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: WARM.ink,
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero — two-column grid */}
      <div
        className="tokyo-hero"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          paddingTop: "60px",
          overflow: "hidden",
        }}
      >
        {/* Left — editorial panel */}
        <div
          className="tokyo-hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "6rem 4rem 6rem 5rem",
            background: WARM.paper,
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: WARM.mist,
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            Japan&rsquo;s Capital &middot; 東京都 — {data.season}
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(3.5rem, 6vw, 6rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              margin: 0,
              marginBottom: "1rem",
              color: WARM.ink,
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-noto-serif-jp), serif",
                fontSize: "clamp(4rem, 7vw, 7rem)",
                color: WARM.red,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              東京
            </span>
            TOKYO
          </h1>

          {/* Gold rule */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: WARM.gold,
              margin: "2rem 0",
            }}
          />

          {/* Description */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: WARM.mist,
              maxWidth: "380px",
              fontWeight: 300,
            }}
          >
            東京のおすすめスポット・グルメ・イベントを季節や最新の話題をもとに毎日更新しています。
          </p>

          {/* Season badge + last updated */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", alignItems: "center" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                border: `1px solid ${WARM.gold}`,
                color: WARM.gold,
                background: "transparent",
              }}
            >
              {data.season}
            </span>
            <span style={{ fontSize: "0.72rem", color: WARM.mist }}>
              最終更新: {data.lastUpdated}
            </span>
          </div>

          {/* Scroll hint */}
          <div
            className="tokyo-hero-scroll-hint"
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "5rem",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: WARM.mist,
              writingMode: "vertical-lr",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "40px",
                background: WARM.gold,
                animation: "tokyoScrollLine 2s ease-in-out infinite",
              }}
            />
            Scroll
          </div>
        </div>

        {/* Right — Hero image (today's featured spot) */}
        <div
          className="tokyo-hero-images"
          style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
        >
          <HeroImage
            item={data.spots[0]}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Marquee banner */}
      <div
        style={{
          background: WARM.red,
          overflow: "hidden",
          padding: "0.8rem 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 0,
            animation: "tokyoMarquee 25s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(2)].flatMap((_, arrIdx) =>
            ["東京", "TOKYO", "スポット", "グルメ", "イベント", "四季", "文化", "食", "祭り", "散策"].map(
              (text, i) => (
                <span
                  key={`${arrIdx}-${i}`}
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "white",
                    padding: "0 2rem",
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {text} ◆
                </span>
              )
            )
          )}
        </div>
      </div>

      {/* Content */}
      <main style={{ padding: 0 }}>
        <Section title="スポット" items={data.spots} variant="spots" id="spots" />
        <Section title="グルメ" items={data.gourmet} variant="gourmet" id="gourmet" />
        <Section title="イベント" items={data.events} variant="events" showDate id="events" />
      </main>

      <Footer />
    </div>
  );
}

function HeroImage({
  item,
  sizes,
}: {
  item: RecommendationItem;
  sizes?: string;
}) {
  const keywords = item.imageQuery.trim().split(/\s+/).join(",");
  const imageUrl = `https://loremflickr.com/1200/900/${encodeURIComponent(keywords)}`;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={item.name}
        sizes={sizes}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        loading="eager"
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(26,20,16,0.7) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      {/* Label */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(26,20,16,0.55)",
          padding: "0.3rem 0.6rem",
          backdropFilter: "blur(4px)",
        }}
      >
        {item.area} — {item.name}
      </div>
    </div>
  );
}

const SECTION_META: Record<SectionVariant, { englishLabel: string; subtext: string }> = {
  spots:   { englishLabel: "Recommended Spots", subtext: "今週の東京でおすすめの場所" },
  gourmet: { englishLabel: "Food & Drink",       subtext: "旬の味覚と名店" },
  events:  { englishLabel: "Events & Festivals", subtext: "今月のイベント・祭り" },
};

function Section({
  title,
  items,
  variant,
  showDate = false,
  id,
}: {
  title: string;
  items: RecommendationItem[];
  variant: SectionVariant;
  showDate?: boolean;
  id?: string;
}) {
  const isSpots = variant === "spots";
  const isGourmet = variant === "gourmet";

  const sectionBg = isSpots ? WARM.ink : isGourmet ? WARM.pale : WARM.paper;
  const sectionColor = isSpots ? WARM.paper : WARM.ink;
  const labelColor = isSpots ? WARM.gold : WARM.red;
  const mutedColor = isSpots ? "rgba(247,243,238,0.5)" : WARM.mist;

  const { englishLabel, subtext } = SECTION_META[variant];

  return (
    <section
      id={id}
      className="tokyo-section"
      style={{
        padding: "7rem 5rem",
        background: sectionBg,
        color: sectionColor,
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: isSpots ? "4rem" : "3rem" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: labelColor,
            fontWeight: 500,
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "30px",
              height: "1px",
              background: labelColor,
            }}
          />
          {englishLabel}
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "0.75rem",
            color: sectionColor,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            color: mutedColor,
            lineHeight: 1.8,
            maxWidth: "500px",
          }}
        >
          {subtext}
        </p>
      </div>

      {/* Cards */}
      {isSpots ? (
        <div
          className="tokyo-spots-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "2px",
          }}
        >
          {items.map((item, index) => (
            <div key={index} style={index === 0 ? { gridRow: "span 2" } : {}}>
              <NeonCard item={item} showDate={showDate} featured={index === 0} />
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {items.map((item, index) => (
            <NeonCard key={index} item={item} showDate={showDate} />
          ))}
        </div>
      )}
    </section>
  );
}
