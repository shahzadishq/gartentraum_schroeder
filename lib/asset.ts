/**
 * Prefix a local asset path (e.g. an image in /public) with the configured
 * base path. On GitHub Pages the site is served from a sub-path, and with
 * `images.unoptimized` next/image does not add the base path automatically,
 * so local image `src` values must go through this helper.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
