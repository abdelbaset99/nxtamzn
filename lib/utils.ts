import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumberWithDecimal = (value: number) => {
  const [int, dec] = value.toString(2).split(".");
  return dec ? `${int}.${dec.padEnd(2, "0")}` : int;
};

export const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]+/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
};
