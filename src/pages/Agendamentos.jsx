// src/pages/Agendamentos.jsx
import { useEffect, useState } from "react";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState("");

  // Buscar lista de agendamentos
  const fetchAgendamentos = async () => {
    try {
      setCarregando(true);
      const response = await fetch("http://localhost:5000/api/agendamentos/");
      if (!response.ok) throw new Error("Erro ao carregar agendamentos");

      const data = await response.json();
      setAgendamentos(data);
      setMensagem("");
    } catch (err) {
      console.error(err);
      setMensagem("❌ Não foi possível carregar os agendamentos.");
    } finally {
      setCarregando(false);
    }
  };

  // Excluir agendamento
  const excluirAgendamento = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este agendamento?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/agendamentos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAgendamentos((prev) => prev.filter((item) => item.id !== id));
        setMensagem("✅ Agendamento excluído com sucesso.");
      } else {
        const err = await response.json();
        setMensagem(`❌ Erro: ${err.error || "Não foi possível excluir"}`);
      }
    } catch (error) {
      console.error(error);
      setMensagem("❌ Erro de conexão com o servidor.");
    }
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Meus Agendamentos</h2>

      {/* Mensagem de feedback */}
      {mensagem && (
        <div
          className={`mb-4 p-3 rounded ${
            mensagem.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {mensagem}
        </div>
      )}

      {/* Estado de carregamento */}
      {carregando ? (
        <p className="text-gray-600 italic">Carregando agendamentos...</p>
      ) : agendamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum agendamento encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {agendamentos.map((item) => (
            <li
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow bg-white"
            >
              <p><strong>Nome:</strong> {item.nome}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p>
                <strong>Data da visita:</strong>{" "}
                {new Date(item.data_visita).toLocaleDateString("pt-BR")}
              </p>
              <p><strong>Assunto:</strong> {item.assunto || "Não informado"}</p>

              <button
                onClick={() => excluirAgendamento(item.id)}
                className="mt-3 text-red-600 hover:underline"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
