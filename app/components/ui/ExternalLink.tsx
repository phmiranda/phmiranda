import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ExternalLink({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "text-sm font-medium text-zinc-700 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white",
        className,
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
