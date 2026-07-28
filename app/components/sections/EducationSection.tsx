import { education } from "@/app/data/education";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/Card";

export function EducationSection() {
  return (
    <Section id="formacao" eyebrow="Base academica" title="Formacao" tone="panel">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <Card key={`${item.institution}-${item.course}`}>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.period}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {item.course}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.institution}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
