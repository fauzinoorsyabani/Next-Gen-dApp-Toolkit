// Versi JS (bukan TypeScript)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// SATU-SATUNYA EXPORT:
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
