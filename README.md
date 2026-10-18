# Portfólio · Anderson Farias

Portfólio pessoal com foco em desenvolvimento web e cibersegurança.

**Stack:** [Astro](https://astro.build) · TypeScript · Tailwind CSS v4 · Content Collections (Markdown + Zod)

## Rodar localmente

Requisito: Node.js 22 ou mais recente.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

## Comandos

| Comando           | O que faz                                             |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                           |
| `npm run build`   | Checa os tipos e gera o site em `dist/`               |
| `npm run preview` | Abre a versão de produção localmente                  |
| `npm run lint`    | ESLint                                                |
| `npm run format`  | Prettier                                              |
| `npm run og`      | Regera a imagem de compartilhamento (`public/og.png`) |

## Como adicionar um projeto

Crie um arquivo `.md` em `src/content/projetos/`. Os campos obrigatórios (título, resumo, stack, destaques…) são validados no build pelo esquema em `src/content.config.ts`. Para usar uma screenshot, salve a imagem em `src/assets/projetos/` e informe `cover` e `coverAlt`. Sem capa, o site gera uma automaticamente.

Dados pessoais (e-mail, redes, habilidades) ficam em `src/data/site.ts`.

## Deploy

- **GitHub Pages:** o workflow `.github/workflows/deploy.yml` publica a cada push na `main`. Em _Settings → Pages_, a origem precisa estar como **GitHub Actions**.
- **Vercel:** importe o repositório. Não precisa de variáveis: sem `BASE_PATH`, o site é gerado na raiz do domínio.
