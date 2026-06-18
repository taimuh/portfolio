"use client";

import { Card3D } from "@/components/ui/card-3d";
import type { RecommendationItem } from "@/lib/tokyo";

const WARM = {
  ink: "#1a1410",
  paper: "#f7f3ee",
  red: "#c0392b",
  gold: "#b8975a",
  mist: "#8c8078",
  pale: "#ede8e0",
} as const;

export function NeonCard({
  item,
  showDate = false,
  featured = false,
}: {
  item: RecommendationItem;
  showDate?: boolean;
  featured?: boolean;
}) {
  const keywords = item.imageQuery.trim().split(/\s+/).join(",");
  const imageUrl = `https://loremflickr.com/800/600/${encodeURIComponent(keywords)}`;

  return (
    <Card3D style={{ height: "100%" }}>
      <div
        style={{
          background: WARM.ink,
          borderRadius: 0,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderTop: `3px solid ${WARM.gold}`,
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            ...(featured
              ? { flex: 1, minHeight: "500px" }
              : { height: "160px" }),
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: `linear-gradient(to top, ${WARM.ink}, transparent)`,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: "1.2rem 1.4rem 1.4rem" }}>
          {/* Area + date row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                color: WARM.gold,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {item.area}
            </span>
            {showDate && item.date && (
              <span
                style={{
                  fontSize: "0.65rem",
                  color: WARM.mist,
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {item.date}
              </span>
            )}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: featured ? "1.5rem" : "1rem",
              fontWeight: 700,
              color: WARM.paper,
              marginBottom: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            {item.name}
          </h3>

          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(247,243,238,0.55)",
              lineHeight: 1.7,
              marginBottom: "0.9rem",
            }}
          >
            {item.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.62rem",
                  padding: "0.2rem 0.6rem",
                  border: "1px solid rgba(184,151,90,0.4)",
                  color: WARM.gold,
                  letterSpacing: "0.06em",
                  background: "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card3D>
  );
}
