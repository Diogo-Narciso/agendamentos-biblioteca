import { useEffect, useState } from "react";

export default function Works() {
  const [obras, setObras] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books/");
        if (!response.ok) throw new Error("Erro ao buscar obras");
        const data = await response.json();
        setObras(data);
        setErro("");
      } catch (err) {
        console.error(err);
        setErro("❌ Não foi possível carregar as obras.");
      } finally {
        setCarregando(false);
      }
    };

    fetchObras();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Obras da Biblioteca</h1>

      {carregando ? (
        <p>Carregando obras...</p>
      ) : erro ? (
        <p className="text-red-600">{erro}</p>
      ) : obras.length === 0 ? (
        <p className="text-gray-600">Nenhuma obra encontrada.</p>
      ) : (
        <ul className="space-y-2">
          {obras.map((obra) => (
            <li key={obra.id} className="bg-white shadow p-3 rounded">
              <span className="text-blue-600 font-medium">{obra.title}</span>
              <p className="text-sm text-gray-600">{obra.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
