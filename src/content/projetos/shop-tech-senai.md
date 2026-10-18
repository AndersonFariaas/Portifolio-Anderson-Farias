---
title: SENAI Shop Tech
summary: Vitrine de produtos e soluções do SENAI FIRJAN que consome uma API REST, com carrossel, modais, tema claro/escuro e menu responsivo.
category: Front-end
stack: [HTML, CSS, JavaScript, API REST]
highlights:
  - Produtos carregados de uma API, com estados de carregamento e erro
  - Tema claro/escuro salvo no navegador
  - Interface acessível, com carrossel e modais navegáveis por teclado
order: 3
year: 2026
status: Concluído
links:
  live: https://andersonfariaas.github.io/Trabalho-Front-End/
  repo: https://github.com/AndersonFariaas/Trabalho-Front-End
---

## O problema

Projeto do curso: criar uma vitrine para os produtos e soluções do SENAI FIRJAN consumindo dados reais de uma API, sem framework.

## A solução

Uma página em HTML, CSS e JavaScript puros, com:

- **Catálogo dinâmico** vindo de uma API REST, com mensagens de carregamento, erro e lista vazia.
- **Carrossel no hero** e **modais** de detalhes.
- **Tema claro/escuro** com a preferência salva no `localStorage` (e tratamento para quando ele não está disponível).
- **Menu responsivo** para celular.

## O que aprendi

- Montar a interface com `createElement` em vez de `innerHTML`, evitando injeção de HTML com dados externos.
- Tratar falhas de rede de forma amigável para o usuário.
- Organizar JavaScript sem framework em funções pequenas e reutilizáveis.
