import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function getRandomInt(min: number, max: number) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

export function getRandomElementFromArray(array: any[]) {
  const len = array.length;
  return array[getRandomInt(0, len - 1)];
}

export function getChunkedArray(arr: any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i = i + chunkSize) {
    const chunkArr = [...arr.slice(i, i + chunkSize)];
    result.push(chunkArr);
  }
  return result;
}

export function generateRandomHex() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
