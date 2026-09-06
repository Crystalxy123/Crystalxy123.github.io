import type { Lang } from './site';

export const sections = [
  'news',
  'about',
  'research',
  'publications',
  'projects',
  'honors',
  'service',
  'contact',
] as const;

export type Section = (typeof sections)[number];

export function localizedPath(lang: Lang, path = '/'): string {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return lang === 'en' ? (normalized === '/' ? '/en/' : `/en${normalized}`) : normalized;
}

export function alternatePath(lang: Lang, pathname: string): string {
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (lang === 'en') {
    const withoutEnglish = clean.replace(/^\/en(?=\/)/, '');
    return withoutEnglish || '/';
  }
  return clean === '/' ? '/en/' : `/en${clean}`;
}
