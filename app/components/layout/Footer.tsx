import { profile } from "@/app/data/profile";
import { socials } from "@/app/data/socials";
import { ExternalLink } from "@/app/components/ui/ExternalLink";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {profile.email}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <ExternalLink key={social.url} href={social.url}>
              {social.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
