---
title: Portal MAJESTIC-12
summary: Portal de investigação ufológica com galeria, vídeos, dossiês de casos e um painel de administração protegido para gerenciar todo o conteúdo.
category: Aplicação web
stack: [Vue 3, Vite, Vue Router, Tailwind, Supabase, Vercel, Vitest]
highlights:
  - Painel admin com login para criar, editar, ordenar e excluir conteúdo
  - Regras de acesso no banco (RLS do Supabase)
  - Publicado na Vercel com deploy contínuo
order: 2
featured: true
year: 2026
status: Em produção
cover: ../../assets/projetos/majestic-12.png
coverAlt: Tela de abertura do Portal MAJESTIC-12 com o título "A verdade está lá fora"
links:
  live: https://portal-majestic-12.vercel.app/
---

## O problema

O conteúdo sobre ufologia na internet é espalhado e difícil de navegar. A ideia era reunir fotografias, vídeos, reportagens e dossiês num só lugar, organizado por tema e fácil de manter atualizado.

## A solução

Um portal com galeria de fotografias, vídeos e reportagens, fichas técnicas, dossiês de casos famosos, tipologia UAP e outras categorias, com identidade visual sci-fi própria.

Toda a curadoria é feita por um **painel de administração**: depois de fazer login, o administrador cria, edita, reordena e exclui registros sem tocar no código.

## Arquitetura

- **Front-end:** Vue 3 + Vite + Vue Router, com Tailwind CSS.
- **Back-end como serviço:** Supabase para banco de dados, autenticação e armazenamento.
- **Hospedagem:** Vercel, com deploy a cada push.
- **Qualidade:** testes com Vitest, ESLint e Prettier, além de scripts de backup do banco.

## Segurança

- **Row Level Security (RLS)** nas tabelas: o público lê só registros aprovados, envios de visitantes entram como pendentes de moderação e só administradores autenticados publicam.
- Chaves sensíveis apenas em variáveis de ambiente, nunca no front-end.
