import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyled } from "./components/styled/Global.styled";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

    <GlobalStyled/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
