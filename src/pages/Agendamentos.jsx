import { useEffect, useState } from "react";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("agendamentos");
    if (stored) setAgendamentos(JSON.parse(stored));
  }, []);

  const removerAgendamento = () => {
    const atualizado = agendamentos.filter((item) => item.id !== agendamentoSelecionado.id);
    setAgendamentos(atualizado);
    localStorage.setItem("agendamentos", JSON.stringify(atualizado));
    setAgendamentoSelecionado(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Meus Agendamentos</h2>

      {agendamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum agendamento encontrado.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Nome</th>
              <th className="p-3">Tipo de Visita</th>
              <th className="p-3">Data</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.nome}</td>
                <td className="p-3">{item.tipoVisita}</td>
                <td className="p-3">{item.data}</td>
                <td className="p-3">
                  <button
                    title="Excluir agendamento"
                    onClick={() => setAgendamentoSelecionado(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de Confirmação */}
      {agendamentoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Tem certeza que deseja excluir o agendamento de{" "}
              <span className="text-red-600">{agendamentoSelecionado.nome}</span>?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setAgendamentoSelecionado(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={removerAgendamento}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
