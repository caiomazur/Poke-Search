import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyled } from "./components/styled/Global.styled";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";

function App() {

  return (
    <div className="App">

    <GlobalStyled/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
