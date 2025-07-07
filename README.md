# 📚 Agendamentos de Visitas à Biblioteca

Aplicação web feita em React que permite visualizar autores, agendar visitas à biblioteca e gerenciar esses agendamentos com persistência no `localStorage`. A aplicação consome uma API pública de autores e demonstra boas práticas de componentização, roteamento e usabilidade.

---

## 🚀 Funcionalidades

- ✅ Página inicial com boas-vindas e links de navegação
- ✅ Página de serviços com listagem dinâmica via API externa
- ✅ Formulário de agendamento com validações e feedback visual
- ✅ Listagem de agendamentos realizados
- ✅ Armazenamento dos dados localmente (localStorage)
- ✅ Navegação entre páginas com React Router

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia       | Versão Usada      |
|------------------|-------------------|
| Node.js          | `v20.19.3`        |
| npm              | `v10.5.2`         |
| React            | `v18.x`           |
| Vite             | `v7.0.0`          |
| Tailwind CSS     | `v4.1.11`         |
| PostCSS          | `v8.5.6`          |
| React Router DOM | `v6.x`            |

---

## ⚙️ Pré-requisitos

Antes de rodar este projeto, certifique-se de ter instalado em sua máquina:

- Node.js (https://nodejs.org)
- npm (gerenciador de pacotes que já vem com o Node.js)
- Editor de código (recomenda-se VS Code)

### Verificando versões:

```bash
node -v
npm -v
```

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório** ou crie o projeto com Vite:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd mvp-puc-front-end
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

---

## 🌐 Rotas da Aplicação

| Caminho           | Descrição                           |
|-------------------|-------------------------------------|
| `/`               | Página inicial                      |
| `/servicos`       | Listagem de serviços disponíveis    |
| `/agendar`        | Formulário para novo agendamento    |
| `/agendamentos`   | Listagem de agendamentos salvos     |

---

## 🗂️ Estrutura de Pastas

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ServiceCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Schedule.jsx
│   └── Agendamentos.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 💾 Armazenamento

Os dados de agendamento são armazenados no **localStorage** do navegador. Em uma versão futura, poderá ser conectado a uma API real com banco de dados.

---

## 🌐 API Externa

- **Nome**: Open Library API  
- **Licença**: Open Data (sem necessidade de API Key)  
- **Rotas utilizadas**:
  - `https://openlibrary.org/search/authors.json?q=a` – Listagem de autores
  - `https://openlibrary.org/authors/:id/works.json` – Obras do autor

---

## 🧪 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Diogo-Narciso/agendamento-biblioteca.git
