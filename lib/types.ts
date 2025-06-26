// 共通の型定義

export interface BaseItem {
  id: string;
  slug: string;
  tags?: string[];
}

export interface WorkItem extends BaseItem {
  title: string;
  description: string;
  content: string;
  summary: string;
  buttonText: string;
  date?: string;
}

export interface SkillItem extends BaseItem {
  name: string;
  description: string;
  content: string;
  experience?: string;
  level?: string;
}

export interface PostItem extends BaseItem {
  title: string;
  description: string;
  content: string;
  summary: string;
  buttonText: string;
  date?: string;
}

export interface CardItem {
  id?: string | number;
  title: string;
  description: string;
  content?: string;
  summary?: string;
  buttonText: string;
  buttonAction?: () => void;
  date?: string;
}

export interface GridProps {
  title: string;
  className?: string;
  id?: string;
}

export interface CardGridProps extends GridProps {
  items: CardItem[];
  showContent?: boolean;
}

export interface SkillGridProps extends GridProps {
  skills: readonly SkillItem[];
}