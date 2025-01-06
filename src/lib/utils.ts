import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface News {
  id: string;
  headingEng?: string;
  taglineEng?: string;
  headingHin?: string;
  taglineHin?: string;
  pictureUrl?: string;
  headingUrd?: string;
  taglineUrd?: string;
  createdAt: Date;
  readTime: number;
  views: number;
  tags: string[];
  author: {
    id: string;
    name: string;
    photoUrl: string;
    fullPath: string;
    email: string;
    active: boolean;
  };
  category: {
    id: string;
    name: string;
  };
}