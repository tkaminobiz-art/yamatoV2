"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

// primary: グラデーション + グロー（最重要CTA）
// secondary: Ghost + アクセントライン（資料請求等）
// ghost: 透明 + アクセントボーダー（補助CTA）
// glass: Glassmorphism（ダーク背景上専用）
const variantStyles: Record<Variant, string> = {
  primary:
    "text-white font-medium btn-primary-glow border-0",
  secondary:
    "bg-transparent text-accent border border-accent/40 hover:bg-accent/6 hover:border-accent/60 transition-all duration-300",
  ghost:
    "bg-transparent text-text border border-[rgba(0,0,0,0.15)] hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.03)] transition-all duration-300",
  glass:
    "text-white border border-white/15 transition-all duration-400",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-6 text-sm gap-1.5",
  md: "h-12 px-8 text-[15px] gap-2",
  lg: "h-14 px-10 text-[15px] gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      disabled,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const glassStyle =
      variant === "glass"
        ? {
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
            ...style,
          }
        : style;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          "rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          "cursor-pointer select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={glassStyle}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
