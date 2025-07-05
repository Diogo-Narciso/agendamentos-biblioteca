import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f)`,
      }}
    >
      <div className="text-white max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Bem-vindo ao sistema de agendamentos de visitas à biblioteca
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md">
          Gerencie seus agendamentos com facilidade e praticidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/autores"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-bold">Acervo de autores</h2>
            <p>Visualize os autores disponíveis na biblioteca.</p>
          </Link>

          <Link
            to="/agendamentos"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-bold">Agendamentos</h2>
            <p>Veja, edite ou exclua seus agendamentos ativos.</p>
          </Link>

          <Link
            to="/agenda"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-bold">Agenda</h2>
            <p>Acompanhe a agenda dos dias disponíveis.</p>
          </Link>
        </div>

        <div>
          <Link
            to="/agendar"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Fazer um agendamento
          </Link>
        </div>
      </div>
    </div>
  );
}
