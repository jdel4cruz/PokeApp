import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import PokemonGrid from "./PokemonGrid";
import Home from "./Home";
import PokemonDescription from "./PokemonDescription.js";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolutions from "./PokemonEvolutions";

//Components
import Header from "./Components/Header";
import Container from "./Container";

//Styles
import { GlobalStyle } from "./GlobalStyle";

//Hooks
import { GenProvider } from "./GenerationState";

function App() {
  return (
    <>
      <GenProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<PokemonGrid />} />
            <Route path="pokemon/:pokemonId" element={<PokemonDescription />} />
            <Route path="pokemon/:pokemonId/moves" element={<PokemonMoves />} />
            <Route
              path="pokemon/:pokemonId/evo"
              element={<PokemonEvolutions />}
            />
          </Routes>
        </Router>
      </GenProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
