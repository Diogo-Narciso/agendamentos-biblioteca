import Works from "./pages/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Autores from "./pages/autores"; // Renamed to match the file name
import Agendamentos from "./pages/Agendamentos";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/agendar/:id" element={<Schedule />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="/obras/:idAutor" element={<Works />} /> {/* NOVA ROTA */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}
