#  Avaliação Prática - Desenvolvedor Full Stack

Este projeto foi desenvolvido como parte da avaliação prática para o cargo de **Desenvolvedor Full Stack**.  
O objetivo é implementar um sistema **CRUD de usuários**, contemplando **frontend (React)**, **backend (NestJS)** e documentação via **Swagger UI**, utilizando um banco de dados relacional.

---

## 📌 Funcionalidades Implementadas

### Frontend (React)
- Tela de apresentação (Home).
- Lista de usuários com:
  - Pesquisa por nome.
  - Paginação.
- Cadastro de usuários com validações:
  - Nome: apenas letras.
  - Email: apenas e-mails válidos.
  - Matrícula: apenas números.
  - Senha: alfanumérica de 6 dígitos.
  - Botão "Salvar" habilitado somente quando todos os campos forem válidos.
- Edição de usuário.
- Exclusão de usuário.

### Backend (NestJS)
- Endpoints RESTful para CRUD de usuários.
- Documentação automática com **Swagger UI**.
- Integração com banco de dados relacional (PostgreSQL ou MySQL).

---

## Tecnologias Utilizadas
- **Frontend:** React, Axios, React Router  
- **Backend:** NestJS, TypeScript, Swagger  
- **Banco de Dados:** PostgreSQL (ou MySQL)  
- **Ferramentas:** ESLint, Prettier, Docker (opcional)  

---

##  Como Executar o Projeto

✅ Pré-requisitos

Antes de começar, é necessário ter instalado:

Node.js (v18+)

NPM ou Yarn

Git

PostgreSQL ou MySQL

(Opcional) Docker

### 1. Configurar o Banco de Dados

Crie um banco de dados no MySQL:

CREATE DATABASE crud;

2. Configurar e Rodar o Backend (NestJS)
cd crud-nest
npm install

Criar o arquivo .env na raiz do projeto:
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=rott
DB_PASSWORD=Beccamagno2706@
DB_DATABASE=crud

Rodar a aplicação:
npm run start:dev

A API estará disponível em:

http://localhost:3000

Swagger:

http://localhost:3000/api

4. Configurar e Rodar o Frontend (React)
cd full-stack-crud
npm install
npm start

O frontend estará disponível em:

http://localhost:5173

5. Testando a aplicação

Acesse o frontend

Cadastre usuários

Visualize a documentação pelo Swagger

Teste os endpoints diretamente pelo Swagger UI

### 6. Clonar o repositório
```bash
# Backend
git clone https://github.com/Becksantos/Crud-nestJs-Backend.git

# Frontend
git clone https://github.com/Becksantos/Crud-react-frontend.git


