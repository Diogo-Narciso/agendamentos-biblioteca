// src/pages/autores.jsx
import { useEffect, useState } from "react";

export default function Autores() {
  const [autores, setAutores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/"); // 👈 sua API
        if (!response.ok) throw new Error("Erro ao carregar autores");

        const data = await response.json();
        setAutores(data);
      } catch (error) {
        console.error("Erro ao buscar autores:", error);
        setErro("❌ Não foi possível carregar os autores.");
      } finally {
        setCarregando(false);
      }
    };

    fetchAutores();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Autores</h1>

      {carregando ? (
        <p>Carregando autores...</p>
      ) : erro ? (
        <p className="text-red-600">{erro}</p>
      ) : autores.length === 0 ? (
        <p className="text-gray-500 italic">Nenhum autor encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {autores.map((autor) => (
            <div
              key={autor.id}
              className="bg-white rounded-xl shadow border p-4 space-y-2"
            >
              <h2 className="text-xl font-semibold text-blue-600">{autor.name}</h2>
              <p className="text-sm text-gray-500 italic">Email: {autor.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
