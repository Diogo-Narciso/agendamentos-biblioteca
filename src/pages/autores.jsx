import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Autores() {
  const [autores, setAutores] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const response = await fetch("https://openlibrary.org/search/authors.json?q=a");
        const data = await response.json();
        setAutores(data.docs);
      } catch (error) {
        console.error("Erro ao buscar autores:", error);
      } finally {
        setCarregando(false);
      }
    };

    fetchAutores();
  }, []);

  const autoresFiltrados = autores.filter((autor) =>
    autor.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Buscar autores</h1>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o nome do autor"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => console.log("Busca local apenas")}
        >
          Buscar
        </button>
      </div>

      {carregando ? (
        <p>Carregando autores...</p>
      ) : autoresFiltrados.length === 0 ? (
        <p className="text-gray-500 italic">Nenhum autor encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {autoresFiltrados.map((autor) => (
            <div
              key={autor.key}
              className="bg-white rounded-xl shadow border p-4 space-y-2"
            >
              <h2 className="text-xl font-semibold text-blue-600">{autor.name}</h2>
              <p className="text-sm text-gray-500 italic">
                Data de nascimento: {autor.birth_date || "Desconhecida"}
              </p>
              <p className="text-sm text-gray-600">
                Obra mais famosa: {autor.top_work || "Não informada"}
              </p>
              <button
                title="Visualizar obras deste autor"
                onClick={() => navigate(`/obras/${autor.key.replace("/authors/", "")}`)}
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Ver obras
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
