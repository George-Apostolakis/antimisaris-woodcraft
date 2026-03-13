/**
 * Maps page names (as used in the original SPA) to Next.js route paths.
 */
export function createPageUrl(pageName) {
  const routes = {
    Home: '/',
    Services: '/services',
    Portfolio: '/portfolio',
    Contact: '/contact',
  };
  return routes[pageName] ?? `/${pageName.toLowerCase()}`;
}

/**
 * Merges class names (mirrors the shadcn/ui pattern).
 * Install: npm install clsx tailwind-merge
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
