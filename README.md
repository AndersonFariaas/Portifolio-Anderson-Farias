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

Os demais dados ficam em `src/data/`: contato e redes em `site.ts`, carreira e certificações em `profile.ts`, stack em `tech.ts` e áreas de atuação em `areas.ts`.

## Deploy (Vercel)

O site é publicado na [Vercel](https://vercel.com), integrada ao GitHub:

- Push na `main` → deploy de produção.
- Pull request → deploy de preview com link próprio.

A Vercel detecta o Astro automaticamente (build `npm run build`, saída `dist/`), então não é preciso configurar variáveis de ambiente. O domínio usado em canonical, `og:image` e sitemap vem de `VERCEL_PROJECT_PRODUCTION_URL`, que a própria Vercel define no build.
