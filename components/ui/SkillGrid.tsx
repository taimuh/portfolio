import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkillGridProps } from '@/lib/types';
import { UI_TEXT } from '@/lib/constants';

export function SkillGrid({ title, skills, className, id }: SkillGridProps) {
  return (
    <section id={id} className={className}>
      <div className={STYLES.container}>
        <h2 className={STYLES.title}>{title}</h2>
        <div className={STYLES.grid}>
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle>{skill.name}</CardTitle>
                {skill.experience && (
                  <div className={STYLES.experience}>
                    {UI_TEXT.labels.experience}: {skill.experience}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const STYLES = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  title: "text-3xl font-extrabold text-gray-900 dark:text-stone-100",
  grid: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
  experience: "text-xs text-blue-600 dark:text-blue-400 font-medium mt-1",
} as const;
