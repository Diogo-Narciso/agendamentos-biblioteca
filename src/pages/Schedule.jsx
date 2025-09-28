// src/pages/Schedule.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataVisita, setDataVisita] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem("");

    try {
      const response = await fetch("http://localhost:5000/api/agendamentos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          data_visita: dataVisita,
          assunto,
        }),
      });

      if (response.ok) {
        setMensagem("✅ Agendamento criado com sucesso!");
        setNome("");
        setEmail("");
        setDataVisita("");
        setAssunto("");

        // pequeno delay para mostrar a mensagem antes de redirecionar
        setTimeout(() => navigate("/agendamentos"), 1200);
      } else {
        const err = await response.json();
        setMensagem(`❌ Erro: ${err.error || "Não foi possível criar o agendamento"}`);
      }
    } catch (error) {
      console.error(error);
      setMensagem("❌ Erro de conexão com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Novo Agendamento</h2>

        {/* Mensagem de feedback */}
        {mensagem && (
          <div
            className={`mb-4 p-3 rounded ${
              mensagem.startsWith("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {mensagem}
          </div>
        )}

        <label className="block mb-2 font-medium">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Data da visita</label>
        <input
          type="date"
          value={dataVisita}
          onChange={(e) => setDataVisita(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Assunto</label>
        <input
          type="text"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          type="submit"
          disabled={carregando}
          className={`w-full px-4 py-2 rounded text-white ${
            carregando ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {carregando ? "Salvando..." : "Agendar"}
        </button>
      </form>
    </div>
  );
}
