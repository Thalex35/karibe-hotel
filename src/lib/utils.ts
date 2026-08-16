import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines conditional Tailwind classes and resolves conflicts between them
// (e.g. two different "px-*" values) — clsx builds the string, twMerge
// dedupes it.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
