# Formula One API

API simples em Node.js + Fastify + TypeScript para listar times e pilotos de Fórmula 1.

## 🚀 Tecnologias

- TypeScript
- Node.js
- Fastify
- @fastify/cors
- tsx
- tsup

## 📁 Estrutura do projeto

- src/app.ts: cria e configura o servidor Fastify
- src/server.ts: ponto de entrada da aplicação
- src/data.ts: dados mockados de teams e drivers
- src/routes/teams.ts: rotas de times
- src/routes/drivers.ts: rotas de pilotos

## ▶️ Scripts

```bash
npm install
npm run start:dev
```

### Scripts disponíveis

- `npm run start:dev`: executa a API em modo desenvolvimento
- `npm run start:watch`: executa com reinicialização automática
- `npm run build`: gera a build para produção
- `npm run start`: inicia a versão compilada

## 🌐 Endpoints

- `GET /health` → status da API
- `GET /teams` → lista os times
- `GET /drivers` → lista os pilotos
- `GET /drivers/:id` → busca um piloto pelo id

## 🔧 Variáveis de ambiente

A API usa a porta definida em `PORT`.

Exemplo:

```bash
PORT=3333
```

## 🚀 Deploy

A aplicação está preparada para deploy em plataformas como Render, Railway ou Docker.

### Exemplo com Docker

```bash
docker build -t formula-one-api .
docker run -p 3333:3333 formula-one-api
```

## 📝 Observação

A aplicação foi organizada com separação de módulos e funções para facilitar manutenção e evolução.
