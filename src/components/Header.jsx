// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 hover:underline ${
      location.pathname === path ? "text-white font-bold" : "text-white/80"
    }`;

  return (
    <header className="bg-blue-600 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">Agendamento App</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/autores">Autores</Link>
        <Link to="/agendar">Agendar</Link> {/* este leva ao formulário */}
        <Link to="/agendamentos">Meus Agendamentos</Link> {/* este leva à lista */}
      </nav>
    </header>
  );
}
