import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "green" | "outline";

interface BadgeProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  default:  "bg-wood-light text-primary",
  accent:   "bg-accent/10 text-accent",
  green:    "bg-green/10 text-green",
  outline:  "border border-primary/30 text-primary",
};

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded text-[11px] font-medium tracking-[0.15em] uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
