import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const truncateText = (text: string, maxLength: number = 20) => {
  if (text === null || text === undefined || maxLength === 0) {
    return '';
  }

  if (text.length <= maxLength || maxLength < 0) {
    return text;
  }

  return `${text.substring(0, maxLength)}...`;
};

const vietnameseToLatinMap = {
  // ... your map content ...
};

export const filterVNChars = (str: string | undefined | null) => {
  const convertedString = ((str ?? '').split('') as Array<keyof typeof vietnameseToLatinMap>)
    .map((char) => vietnameseToLatinMap[char] || char)
    .join('');

  return convertedString;
};
