import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [tipoDeVisita, setTipoDeVisita] = useState("");

  useEffect(() => {
    if (id) {
      const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
      const agendamento = agendamentos.find((item) => item.id === id);
      if (agendamento) {
        setNome(agendamento.nome);
        setData(agendamento.data);
        setTipoDeVisita(agendamento.tipoDeVisita);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoAgendamento = {
      id: id || Date.now().toString(),
      nome,
      data,
      tipoDeVisita,
    };

    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    const atualizados = id
      ? agendamentos.map((item) =>
          item.id === id ? novoAgendamento : item
        )
      : [...agendamentos, novoAgendamento];

    localStorage.setItem("agendamentos", JSON.stringify(atualizados));
    navigate("/agendamentos");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Editar Agendamento" : "Novo Agendamento"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tipo de Visita</label>
          <input
            type="text"
            value={tipoDeVisita}
            onChange={(e) => setTipoDeVisita(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

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
