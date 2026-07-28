import Image from "next/image";
import { profile } from "@/app/data/profile";
import { Button } from "@/app/components/ui/Button";
import { ExternalLink } from "@/app/components/ui/ExternalLink";
import profilePhoto from "@/app/assets/me.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[calc(100vh-73px)] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent dark:from-zinc-950/80" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
            {profile.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-2xl leading-9 text-zinc-700 dark:text-zinc-200">
            {profile.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={profile.resumeUrl} download variant="primary">
              Baixar curriculo
            </Button>
            <ExternalLink href={profile.linkedinUrl}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden h-48 w-28 translate-y-[calc(var(--parallax-y)*-0.014px)] border-l border-t border-teal-500/40 md:block" />
          <div className="absolute -right-4 bottom-10 hidden h-36 w-36 translate-y-[calc(var(--parallax-y)*-0.028px)] border-b border-r border-amber-500/45 md:block" />

          <div className="relative translate-y-[calc(var(--parallax-y)*-0.01px)] overflow-hidden rounded-lg border border-white/70 bg-white/70 p-3 shadow-2xl shadow-zinc-900/10 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
            <Image
              src={profilePhoto}
              alt={`Foto profissional de ${profile.name}`}
              priority
              className="aspect-[4/5] w-full rounded-md object-cover"
            />

            <div className="absolute inset-x-6 bottom-6 rounded-md border border-white/70 bg-white/88 p-4 backdrop-blur dark:border-white/10 dark:bg-zinc-950/82">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Disponivel para
              </p>
              <p className="mt-2 text-base font-semibold leading-6 text-zinc-950 dark:text-zinc-50">
                {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
