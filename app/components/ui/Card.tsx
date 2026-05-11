import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/70 bg-white/82 p-6 shadow-sm shadow-zinc-900/5 backdrop-blur dark:border-white/10 dark:bg-zinc-950/78",
        className,
      )}
    >
      {children}
    </div>
  );
}
