import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface CardItem {
  id?: string | number;
  title: string;
  description: string;
  content: string;
  buttonText: string;
  buttonAction?: () => void;
}

interface CardGridProps {
  title: string;
  items: CardItem[];
  className?: string;
  id?: string;
}

export function CardGrid({ title, items, className, id }: CardGridProps) {
  return (
    <section id={id} className={className}>
      <div className={STYLES.container}>
        <h2 className={STYLES.title}>{title}</h2>
        <div className={STYLES.grid}>
          {items.map((item, index) => (
            <Card key={item.id || index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={item.buttonAction}>{item.buttonText}</Button>
              </CardFooter>
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
  grid: "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none",
} as const;
