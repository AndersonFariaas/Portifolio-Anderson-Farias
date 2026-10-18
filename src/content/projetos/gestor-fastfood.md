---
title: Gestor FastFood
summary: Sistema de gestão para lanchonetes com frente de caixa, tela da cozinha, painel de senhas para TV e fechamento de caixa, sincronizados em tempo real.
category: Sistema full-stack
stack: [Vue 3, TypeScript, Node.js, Express, Socket.IO, SQLite, Tailwind, Zod]
highlights:
  - Preço, total e senha calculados no servidor, nunca no navegador
  - Cozinha e painel atualizados em tempo real via Socket.IO
  - Comprovante impresso automaticamente ao finalizar o pagamento
order: 1
featured: true
year: 2026
status: Concluído
links:
  repo: https://github.com/AndersonFariaas/Gestor-FastFood-v1
---

## O problema

Lanchonetes pequenas costumam anotar pedidos no papel ou depender de sistemas caros e presos à internet. Isso gera erro de cobrança, pedido perdido na cozinha e um fechamento de caixa demorado.

## A solução

Um sistema que roda na rede local da loja, sem depender de CDN ou de internet:

- **Caixa (PDV):** cardápio visual por categoria, busca com atalho `/` e pagamento em PIX, dinheiro (com cálculo de troco) ou cartão. Ao finalizar, o pedido vai para a cozinha e o comprovante é impresso automaticamente.
- **Cozinha (KDS):** pedidos novos e em preparo, cronômetro com alerta de atraso e aviso sonoro.
- **Painel da TV:** senha chamada em destaque, com lista de prontos e em preparo.
- **Fechamento:** faturamento por forma de pagamento e turnos com histórico.
- **Gestão:** cardápio e equipe com perfis Gerente e Operador.

## Arquitetura

Monorepo com npm workspaces: API em Node.js + Express, front em Vue 3 + Pinia e um pacote compartilhado com tipos e validações em Zod.

- **REST para ações, Socket.IO só para notificar** as telas.
- **O servidor é a fonte da verdade:** o navegador envia só itens e quantidades. Preço, total, número da senha e horário são calculados na API, dentro de transações.
- Camadas bem definidas (rotas → serviços → repositórios), migrações versionadas e valores em centavos.

## Segurança

- Sessão em cookie `httpOnly` com `SameSite=Strict` e token guardado apenas como hash.
- Cabeçalhos de segurança com Helmet (CSP).
- Nenhum HTML montado com dados do usuário.
- Senha provisória no primeiro acesso, com troca obrigatória.
