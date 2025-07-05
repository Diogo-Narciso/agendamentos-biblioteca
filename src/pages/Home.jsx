import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Fundo com imagem cobrindo tudo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f)",
        }}
      ></div>

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo ao sistema de agendamentos de visitas à biblioteca
        </h1>
        <p className="text-lg mb-8">
          Gerencie seus agendamentos com facilidade e praticidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <Link
            to="/autores"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            <h2 className="text-xl font-bold">Acervo de autores</h2>
            <p>Visualize os autores disponíveis na biblioteca.</p>
          </Link>

          <Link
            to="/agendamentos"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            <h2 className="text-xl font-bold">Agendamentos</h2>
            <p>Veja, edite ou exclua seus agendamentos ativos.</p>
          </Link>

          <Link
            to="/agenda"
            className="bg-white text-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            <h2 className="text-xl font-bold">Agenda</h2>
            <p>Acompanhe a agenda dos dias disponíveis.</p>
          </Link>
        </div>

        <div className="mt-8">
          <Link
            to="/agendar"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Fazer um agendamento
          </Link>
        </div>
      </div>
    </div>
  );
}
