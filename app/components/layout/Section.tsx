import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  tone?: "default" | "panel";
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        tone === "panel"
          ? "scroll-mt-24 py-20"
          : "scroll-mt-24 border-t border-white/60 py-20 dark:border-white/10"
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}
