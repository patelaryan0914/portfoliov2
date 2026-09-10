import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Aryan Patel — Full-Stack Software Engineer (Backend Focused)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(59,130,246,0.35), transparent 60%), #0a0a0a",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          Aryan
          <span style={{ color: "#3b82f6" }}>.</span>
        </div>

        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: "-2px" }}>
            Aryan Patel
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              fontWeight: 700,
              color: "#3b82f6",
              marginTop: 6,
            }}
          >
            {siteConfig.jobTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a3a3a3",
              marginTop: 22,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {siteConfig.shortDescription}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#d4d4d4" }}>
          <div style={{ display: "flex", height: 30, width: 6, background: "#3b82f6", borderRadius: 4, marginRight: 20 }} />
          github.com/patelaryan0914
          <span style={{ color: "#525252", margin: "0 16px" }}>•</span>
          {siteConfig.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
