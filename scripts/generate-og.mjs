// Gera public/og.png (1200x630), a imagem exibida ao compartilhar o link.
// Uso: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../public/og.png', import.meta.url));

const gridLines = Array.from({ length: 26 }, (_, i) => i * 48)
  .map((p) => `<path d="M${p} 0V630M0 ${p}H1200" stroke="#ffffff" stroke-opacity=".035"/>`)
  .join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0" stop-color="#5eead4" stop-opacity=".16"/>
      <stop offset="1" stop-color="#5eead4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0e131b"/>
  ${gridLines}
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="96" y="170" font-family="Consolas, 'JetBrains Mono', monospace" font-size="30" fill="#5eead4">$ whoami</text>
  <text x="96" y="290" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="92" font-weight="700" fill="#e6edf3">Anderson Farias</text>
  <text x="96" y="370" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="40" fill="#9aa6b6">Desenvolvimento web com <tspan fill="#5eead4">segurança</tspan></text>
  <text x="96" y="420" font-family="'Segoe UI', Inter, Arial, sans-serif" font-size="40" fill="#9aa6b6">desde a primeira linha.</text>
  <text x="96" y="540" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" fill="#9aa6b6">Vue · TypeScript · Node.js · Redes · Cibersegurança</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(output);
console.log(`OG gerada em ${output}`);
