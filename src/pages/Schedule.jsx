import React, { useState, useEffect } from "react";
import ConfirmModal from "../components/ConfirmModal";

export default function Schedule() {
  const [nome, setNome] = useState("");
  const [tipoVisita, setTipoVisita] = useState("");
  const [data, setData] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

  // 🚀 Estado inicial já carrega do localStorage
  const [agendamentos, setAgendamentos] = useState(() => {
    try {
      const stored = localStorage.getItem("agendamentos");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Salva no localStorage sempre que agendamentos mudar
  useEffect(() => {
    if (Array.isArray(agendamentos)) {
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    }
  }, [agendamentos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim() || !tipoVisita.trim() || !data.trim()) {
      setMensagem("");
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const novo = {
      id: Date.now(),
      nome,
      tipoVisita,
      data,
    };

    setAgendamentos((prev) => [...prev, novo]);
    setNome("");
    setTipoVisita("");
    setData("");
    setErro("");
    setMensagem("✅ Agendamento realizado com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
  };

  const handleTextoSemNumeros = (valor) => valor.replace(/[0-9]/g, "");

  const abrirModal = (id) => {
    setAgendamentoSelecionado(id);
    setModalOpen(true);
  };

  const confirmarExclusao = () => {
    setAgendamentos((prev) =>
      prev.filter((item) => item.id !== agendamentoSelecionado)
    );
    setModalOpen(false);
    setMensagem("Agendamento excluído com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Agendar Visita à Biblioteca</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
        {erro && <p className="text-red-600">{erro}</p>}
        {mensagem && <p className="text-green-600">{mensagem}</p>}

        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={nome}
            onChange={(e) => setNome(handleTextoSemNumeros(e.target.value))}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tipo de Visita</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={tipoVisita}
            onChange={(e) => setTipoVisita(handleTextoSemNumeros(e.target.value))}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Data</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded p-2"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agendar
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-blue-600">Agendamentos</h3>
      {agendamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum agendamento registrado.</p>
      ) : (
        <ul className="space-y-2">
          {agendamentos.map((item) => (
            <li key={item.id} className="border p-2 rounded shadow-sm space-y-1">
              <p><strong>Nome:</strong> {item.nome}</p>
              <p><strong>Tipo de Visita:</strong> {item.tipoVisita}</p>
              <p><strong>Data:</strong> {item.data}</p>
              <button
                onClick={() => abrirModal(item.id)}
                className="mt-2 text-sm text-red-600 hover:underline"
                title="Excluir este agendamento"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}

      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmarExclusao}
        message="Tem certeza que deseja excluir este agendamento?"
      />
    </div>
  );
}
