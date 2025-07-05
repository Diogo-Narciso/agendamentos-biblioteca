import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setAgendamentos(dados);
  }, []);

  const excluirAgendamento = (id) => {
    const atualizado = agendamentos.filter((item) => item.id !== id);
    localStorage.setItem("agendamentos", JSON.stringify(atualizado));
    setAgendamentos(atualizado);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Meus Agendamentos</h2>

      {agendamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum agendamento encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {agendamentos.map((item) => (
            <li
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="mb-2">
                <p><strong>Nome:</strong> {item.nome}</p>
                <p><strong>Tipo de Visita:</strong> {item.tipoDeVisita}</p>
                <p><strong>Data:</strong> {item.data}</p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`/agendar/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => excluirAgendamento(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
