import { profile } from "@/app/data/profile";
import { socials } from "@/app/data/socials";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/Button";
import { ExternalLink } from "@/app/components/ui/ExternalLink";

export function ContactSection() {
  return (
    <Section id="contato" eyebrow="Contato" title="Vamos conversar">
      <div className="flex flex-col gap-6 rounded-lg border border-white/70 bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-900/10 dark:border-white/10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-medium">
            {profile.email}
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            Links profissionais e curriculo em PDF.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            href={`mailto:${profile.email}`}
            variant="primary"
            className="bg-white text-zinc-950 hover:bg-zinc-200 dark:bg-white dark:text-zinc-950"
          >
            Enviar email
          </Button>
          {socials.map((social) => (
            <ExternalLink
              key={social.url}
              href={social.url}
              className="text-zinc-100 hover:text-white"
            >
              {social.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
