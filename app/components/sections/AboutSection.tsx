import { profile } from "@/app/data/profile";
import { Section } from "@/app/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="sobre" eyebrow="Perfil" title="Sobre mim" tone="panel">
      <div className="grid gap-6 rounded-lg border border-white/70 bg-white/76 p-6 backdrop-blur dark:border-white/10 dark:bg-zinc-950/72 md:grid-cols-[1.3fr_0.7fr]">
        <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300">
          {profile.about}
        </p>

        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
          {["Full Stack", "Produtos Web", "Boas praticas"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-zinc-200 bg-white/80 p-4 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
