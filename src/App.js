import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonPage from "./views/PokemonPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="*" element={<h1>NotFound 404</h1>} />
      </Routes>
    </div>
  );
}