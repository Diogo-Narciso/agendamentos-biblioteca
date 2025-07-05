# 📚 Agendamentos de Visitas à Biblioteca

Aplicação web feita em React que permite visualizar autores, agendar visitas à biblioteca e gerenciar esses agendamentos com persistência no `localStorage`. A aplicação consome uma API pública de autores e demonstra boas práticas de componentização, roteamento e usabilidade.

---

## 🚀 Funcionalidades

- Visualização de autores com consumo de API externa (Open Library)
- Busca por autores com filtro local
- Visualização de obras por autor
- Formulário de agendamento com validação e persistência no `localStorage`
- Edição e exclusão de agendamentos com modal de confirmação
- Feedback visual em caso de erro, sucesso ou campos não preenchidos
- Design responsivo
- Página de erro 404 para rotas inválidas
- Tooltip nos botões para melhor usabilidade

---

## 🧩 Tecnologias Utilizadas

- React (com Vite)
- React Router DOM
- Tailwind CSS
- API pública da Open Library: `https://openlibrary.org/search/authors.json?q=a`

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
