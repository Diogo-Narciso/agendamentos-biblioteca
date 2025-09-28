# 📚 MVP Front-end - Agendamentos de Visitas à Biblioteca

Este é o front-end do MVP desenvolvido em **React (Vite)**, responsável por consumir a API em Flask/Postgres e permitir a interação com autores e agendamentos de visitas à biblioteca.

---

## 🚀 Tecnologias utilizadas
- **React 18** com **Vite**
- **React Router DOM** (navegação SPA)
- **Tailwind CSS** (estilização)
- **Fetch API** (consumo da API backend)
- **Docker (backend e banco)**

---

## 📂 Estrutura do projeto

```
src/
 ├── components/        # Componentes reutilizáveis
 │    ├── Header.jsx
 │    ├── Footer.jsx
 │    └── ConfirmModal.jsx
 │
 ├── pages/             # Páginas da aplicação
 │    ├── Home.jsx
 │    ├── Autores.jsx
 │    ├── Agendamentos.jsx
 │    ├── Schedule.jsx
 │    ├── Works.jsx
 │    └── NotFound.jsx
 │
 ├── services/          # Serviços (API)
 │    └── api.js
 │
 ├── App.jsx            # Configuração de rotas
 ├── main.jsx           # Entry point
 └── index.css          # Estilos globais
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter:
- [Node.js 20+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Backend rodando em `http://localhost:5000`

---

## ▶️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/mvp-puc-front-end.git
   cd mvp-puc-front-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O front ficará disponível em: **http://localhost:5173**

---

## 🔗 Rotas disponíveis (Front)

- `/` → **Home**
- `/autores` → Lista de autores (vindos do banco via API)
- `/agendamentos` → Lista de agendamentos feitos
- `/agendar` → Criar novo agendamento
- `/obras/:idAutor` → Visualizar obras de um autor
- `*` → Página de erro (NotFound)

---

## 📡 Integração com o backend

- O backend deve estar rodando em `http://localhost:5000`
- Arquivo `src/services/api.js` centraliza os endpoints:
  ```js
  const API_BASE = "http://localhost:5000/api";
  ```

---

## ✅ Funcionalidades implementadas

- [x] Listagem de **autores** via API
- [x] Listagem de **agendamentos**
- [x] Exclusão de agendamento
- [x] Criação de novo agendamento
- [x] Consumo **100% integrado ao backend**

---

## 📌 Observações

- O projeto é um **MVP acadêmico** e pode ser expandido no futuro.
- Caso queira rodar em produção, configure o build:
  ```bash
  npm run build
  npm run preview
  ```

---

✍️ Desenvolvido como parte do MVP Fullstack (PUC)