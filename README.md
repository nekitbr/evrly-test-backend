### # Backend - Fullstack Test
Consumo de dados criptografados, descriptografia (AES-256-GCM) e orquestração com N8N.

#### Tecnologias Utilizadas
* Node.js
* Fastify (Framework Web)
* Crypto (Módulo nativo)

#### Arquitetura do Projeto
* **server.js**: Ponto de entrada e configuração.
* **controllers/**: Gerenciamento de Endpoints.
* **services/**: Regras de negócio e criptografia.
* **clients/**: Integrações com APIs externas.

#### Configuração e Instalação
1. `npm install`
2. Configure o arquivo `.env` (URLs de webhooks e chaves).
3. `npm run local` (disponível em `http://localhost:3000`).
