import {
  siAstro,
  siCss,
  siExpress,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siJavascript,
  siLinux,
  siNodedotjs,
  siPython,
  siSocketdotio,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siVuedotjs,
  siZod,
  type SimpleIcon,
} from 'simple-icons';

export interface Tech {
  name: string;
  path: string;
  /** Cor da marca já ajustada para ficar legível sobre o fundo escuro. */
  color: string;
}

const SURFACE_HEX = '141b26';
const FALLBACK_COLOR = '#e6edf3';
const MIN_CONTRAST = 3;

function luminance(hex: string): number {
  const channels = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(hexA: string, hexB: string): number {
  const [light, dark] = [luminance(hexA), luminance(hexB)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

// Marcas pretas ou muito escuras (Express, Vercel, GitHub…) sumiriam no tema escuro.
function readableColor(hex: string): string {
  return contrast(hex, SURFACE_HEX) >= MIN_CONTRAST ? `#${hex}` : FALLBACK_COLOR;
}

export function tech(icon: SimpleIcon, name = icon.title): Tech {
  return { name, path: icon.path, color: readableColor(icon.hex) };
}

/** Stack exibida na seção de habilidades, na ordem em que aparece. */
export const stack: Tech[] = [
  tech(siHtml5, 'HTML'),
  tech(siCss),
  tech(siJavascript),
  tech(siTypescript),
  tech(siVuedotjs, 'Vue'),
  tech(siVite),
  tech(siTailwindcss, 'Tailwind'),
  tech(siAstro),
  tech(siNodedotjs),
  tech(siExpress),
  tech(siSocketdotio, 'Socket.IO'),
  tech(siSqlite),
  tech(siSupabase),
  tech(siZod),
  tech(siVitest),
  tech(siPython),
  tech(siLinux),
  tech(siGnubash, 'Shell script'),
  tech(siGit),
  tech(siGithub),
  tech(siVercel),
];

// Os projetos usam nomes livres (ex.: "Vue 3"); aqui eles viram o ícone certo.
const aliases: Record<string, string> = {
  'Vue 3': 'Vue',
  'Vue Router': 'Vue',
  'Tailwind CSS': 'Tailwind',
};

const byName = new Map(stack.map((item) => [item.name.toLowerCase(), item]));

export function findTech(name: string): Tech | undefined {
  return byName.get((aliases[name] ?? name).toLowerCase());
}
