import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataVisita, setDataVisita] = useState("");
  const [assunto, setAssunto] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        navigate("/agendamentos");
      } else {
        const err = await response.json();
        setErro(err.error || "❌ Erro ao salvar agendamento.");
      }
    } catch (error) {
      console.error(error);
      setErro("❌ Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Novo Agendamento</h2>
        {erro && <p className="text-red-600 mb-2">{erro}</p>}

        <label className="block mb-2 font-medium">Nome</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full border p-2 rounded mb-4" required />

        <label className="block mb-2 font-medium">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded mb-4" required />

        <label className="block mb-2 font-medium">Data da visita</label>
        <input type="date" value={dataVisita} onChange={(e) => setDataVisita(e.target.value)} className="w-full border p-2 rounded mb-4" required />

        <label className="block mb-2 font-medium">Assunto</label>
        <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} className="w-full border p-2 rounded mb-4" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Agendar
        </button>
      </form>
    </div>
  );
}
