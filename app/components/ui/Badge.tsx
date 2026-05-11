import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
      {children}
    </span>
  );
}
