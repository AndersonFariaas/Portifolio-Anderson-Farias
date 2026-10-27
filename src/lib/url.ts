/**
 * Monta um caminho interno respeitando o `base` do Astro.
 * Hoje o site fica na raiz do domínio, mas assim os links não quebram
 * se um dia ele for publicado em uma subpasta.
 */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${base}/${cleanPath}`;
}
