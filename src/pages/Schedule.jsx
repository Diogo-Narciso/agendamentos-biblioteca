import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Schedule() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [tipoDeVisita, setTipoDeVisita] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
      const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
      const agendamento = agendamentos.find((item) => item.id === id);

      if (agendamento) {
        setNome(agendamento.nome || "");
        setTipoDeVisita(agendamento.tipoDeVisita || "");
        setData(agendamento.data || "");
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    if (id) {
      // Edição
      const atualizado = agendamentos.map((item) =>
        item.id === id
          ? {
              ...item,
              nome: nome || item.nome,
              tipoDeVisita: tipoDeVisita || item.tipoDeVisita,
              data: data || item.data,
            }
          : item
      );
      localStorage.setItem("agendamentos", JSON.stringify(atualizado));
    } else {
      // Novo agendamento
      const novoAgendamento = {
        id: crypto.randomUUID(),
        nome,
        tipoDeVisita,
        data,
      };
      agendamentos.push(novoAgendamento);
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    }

    navigate("/agendamentos");
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{id ? "Editar Agendamento" : "Novo Agendamento"}</h2>

        <label className="block mb-2 font-medium">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Tipo de Visita</label>
        <input
          type="text"
          value={tipoDeVisita}
          onChange={(e) => setTipoDeVisita(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? "Salvar Alterações" : "Agendar"}
        </button>
      </form>
    </div>
  );
}
