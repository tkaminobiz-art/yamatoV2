import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  id,
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        /* EN見出し: 控えめなラベルとして機能させる */
        <span
          className="text-text-light uppercase"
          style={{
            fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            marginBottom: "8px",
          }}
        >
          {label}
        </span>
      )}
      <h2
        id={id}
        className="font-serif text-text"
        style={{
          /* セクション見出し: 階層を明確に */
          fontSize: "clamp(16px, 2.8vw, 36px)",
          fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
          fontWeight: 400,
          letterSpacing: "0.04em",
          lineHeight: 1.4,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-text-light"
          style={{
            fontSize: "15px",
            lineHeight: 1.9,
            letterSpacing: "0.02em",
            maxWidth: "560px",
            marginTop: "8px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
