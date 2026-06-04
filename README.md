# Barbershop Management System

This repository contains the application's back-end, developed with Firebase integration for user authentication and authorization.

---

## Project Overview

**Barbershop Management System API** is a RESTful back-end application built with NestJS and PostgreSQL, integrated with Firebase Authentication for secure user management. The project is containerized using Docker, providing a simple and consistent development environment.

## Technologies Used

- Node.js
- NestJS
- PostgreSQL
- Docker
- Docker Compose

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Docker

---

## Running the Project with Docker

The project is already configured to run the entire application using Docker.

### 1. Clone the Repository

```bash
git clone https://github.com/ryannardelli/system_barbershop_back.git
cd system_barbershop_back
```

### 2. Configure Environment Variables

Create a `.env` file in the project's root directory:

```env
DB_USER=YOUR_DATABASE_USER
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_NAME=YOUR_DATABASE_NAME

FIREBASE_PROJECT_ID=PROJECT_ID
FIREBASE_CLIENT_EMAIL=CLIENT_EMAIL
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

### 3. Start the Containers

```bash
docker compose up --build
```

### If everything is configured correctly, the following service will be available:

- API running at: `http://localhost:3000/api`

---
