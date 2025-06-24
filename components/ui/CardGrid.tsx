import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ReactNode } from "react";

interface CardItem {
  id?: string | number;
  title: string;
  description: string;
  content?: string;
  summary?: string;
  buttonText: string;
  buttonAction?: () => void;
  date?: string;
}

interface CardGridProps {
  title: string;
  items: CardItem[];
  className?: string;
  id?: string;
}

export function CardGrid({ title, items, className, id }: CardGridProps) {
  const getGridClass = () => {
    const itemCount = items.length;
    if (itemCount === 1) {
      return STYLES.gridSingle;
    } else if (itemCount === 2) {
      return STYLES.gridDouble;
    } else {
      return STYLES.grid;
    }
  };

  return (
    <section id={id} className={className}>
      <div className={STYLES.container}>
        <h2 className={STYLES.title}>{title}</h2>
        <div className={getGridClass()}>
          {items.map((item, index) => (
            <Card key={item.id || index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.date && (
                  <div className={STYLES.date}>{formatDate(item.date)}</div>
                )}
              </CardHeader>
              <CardContent>
                <p>{item.summary || item.content}</p>
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
  gridSingle:
    "mt-12 grid gap-5 max-w-md mx-auto grid-cols-1 justify-items-center",
  gridDouble:
    "mt-12 grid gap-5 max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 justify-items-center",
  date: "text-sm text-gray-500 dark:text-gray-400 mt-1",
} as const;
