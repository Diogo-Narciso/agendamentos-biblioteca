import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Works() {
  const { idAutor } = useParams();
  const [obras, setObras] = useState([]);

  useEffect(() => {
    fetch(`https://openlibrary.org/authors/${idAutor}/works.json?limit=50`)
      .then((res) => res.json())
      .then((data) => setObras(data.entries || []))
      .catch((err) => console.error("Erro ao buscar obras:", err));
  }, [idAutor]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Obras do Autor</h1>

      {obras.length === 0 ? (
        <p className="text-gray-600">Nenhuma obra encontrada.</p>
      ) : (
        <ul className="space-y-2">
          {obras.map((obra, index) => (
            <li key={index} className="bg-white shadow p-3 rounded">
              <span className="text-blue-600 font-medium">{obra.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
