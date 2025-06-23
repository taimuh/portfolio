import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return dateString; // Return original string if parsing fails
  }
}

export function extractSummary(content: string, maxSentences: number = 2): string {
  try {
    // Remove markdown headers, lists, and formatting
    const cleanText = content
      .replace(/^#+\s+/gm, '') // Remove headers
      .replace(/^\*\s+/gm, '') // Remove bullet points
      .replace(/^\-\s+/gm, '') // Remove dashes
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
      .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
      .replace(/`(.*?)`/g, '$1') // Remove code formatting
      .trim();

    // Split into sentences and take first few
    const sentences = cleanText
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .slice(0, maxSentences);

    return sentences.join('。') + (sentences.length > 0 ? '。' : '');
  } catch (error) {
    return content.substring(0, 100) + '...'; // Fallback to first 100 chars
  }
}
