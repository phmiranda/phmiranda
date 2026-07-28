import { projects } from "@/app/data/projects";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { ExternalLink } from "@/app/components/ui/ExternalLink";

export function ProjectsSection() {
  return (
    <Section id="projetos" eyebrow="Portfolio" title="Projetos">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              {project.repositoryUrl ? (
                <ExternalLink href={project.repositoryUrl}>
                  Repositorio
                </ExternalLink>
              ) : null}
              {project.demoUrl ? (
                <ExternalLink href={project.demoUrl}>Demo</ExternalLink>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
