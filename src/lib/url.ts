/**
 * Monta um caminho interno respeitando o `base` do Astro.
 * Necessário porque no GitHub Pages o site vive em uma subpasta.
 */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${base}/${cleanPath}`;
}
