import { experiences } from "@/app/data/experiences";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";

export function ExperienceSection() {
  return (
    <Section id="experiencia" eyebrow="Carreira" title="Experiencias">
      <div className="relative grid gap-5 before:absolute before:left-3 before:top-0 before:hidden before:h-full before:w-px before:bg-zinc-300 dark:before:bg-zinc-700 md:before:block">
        {experiences.map((experience) => (
          <Card
            key={`${experience.company}-${experience.role}`}
            className="relative md:ml-10"
          >
            <span className="absolute -left-[3.15rem] top-7 hidden h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white dark:bg-teal-300 dark:ring-zinc-950 md:block" />
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {experience.company}
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {experience.period}
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {experience.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
