# Sistema para barbearia

Este repositório contém o back-end da aplicação, desenvolvido em conjunto com o Firebase, utilizado para autenticação de usuários.

---

## Tecnologias utilizadas

- Node.js
- NestJS
- PostgreSQL
- Docker
- Docker Compose

---

## Como rodar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- Docker

## Rodando o projeto com Docker

O projeto já está configurado para rodar toda a aplicação via Docker.

### 1. Clonar o repositório

```bash
git clone https://github.com/ryannardelli/system_barbershop_back.git
cd system_barbershop_back
```

### 2. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto:
```bash
DB_USER=SEU_USUARIO
DB_PASSWORD=SUA_SENHA
DB_NAME=SEU_NOME_DO_BANCO
```
### 3. Subir os containers
```bash
docker compose up --build
```
### Isso irá subir:
- A aplicação em http://localhost:3000
- Banco PostgreSQL em localhost:5432
