import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UI_TEXT } from '@/lib/constants';

interface SkillGridProps {
  title: string;
  skills: readonly string[];
  className?: string;
  id?: string;
}

export function SkillGrid({ title, skills, className, id }: SkillGridProps) {
  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill}>
              <CardHeader>
                <CardTitle>{skill}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{UI_TEXT.placeholders.shortProjectDescription}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}