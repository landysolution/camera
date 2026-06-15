import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// export const API_URL = "http://localhost:9000";
export const API_URL = "https://camerabackend-8hg7.onrender.com"
