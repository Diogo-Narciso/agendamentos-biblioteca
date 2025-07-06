import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Bem-vindo ao sistema de agendamentos de visitas à biblioteca
        </h1>
        <p className="text-lg md:text-xl">
          Gerencie seus agendamentos com facilidade e praticidade.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/autores"
            className="bg-white text-blue-700 px-6 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition w-full md:w-1/3"
          >
            <h2 className="text-xl font-bold">Acervo de autores</h2>
            <p className="text-sm">Visualize os autores disponíveis na biblioteca.</p>
          </Link>

          <Link
            to="/agendamentos"
            className="bg-white text-blue-700 px-6 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition w-full md:w-1/3"
          >
            <h2 className="text-xl font-bold">Agendamentos</h2>
            <p className="text-sm">Veja, edite ou exclua seus agendamentos ativos.</p>
          </Link>

          <Link
            to="/agenda"
            className="bg-white text-blue-700 px-6 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition w-full md:w-1/3"
          >
            <h2 className="text-xl font-bold">Agenda</h2>
            <p className="text-sm">Acompanhe a agenda dos dias disponíveis.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
