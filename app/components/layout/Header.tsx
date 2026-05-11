import { profile } from "@/app/data/profile";
import { Button } from "@/app/components/ui/Button";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formacao", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="#inicio"
          className="text-sm font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={profile.resumeUrl} download variant="primary">
          Curriculo
        </Button>
      </div>
    </header>
  );
}
