"use client";
import { FadeUp } from "@/components/ui/FadeUp";

interface SectionTransitionProps {
  text: string;
}

export function SectionTransition({ text }: SectionTransitionProps) {
  return (
    <FadeUp>
      <div
        className="text-center"
        style={{ marginTop: "40px", marginBottom: "40px" }}
        aria-hidden="true"
      >
        <p
          className="text-text-light"
          style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "14px",
            lineHeight: 1.8,
            letterSpacing: "0.04em",
          }}
        >
          {text}
        </p>
      </div>
    </FadeUp>
  );
}
