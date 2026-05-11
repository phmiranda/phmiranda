import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
