import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Routes
import PokemonGrid from "./PokemonGrid";
import Home from "./Home";
import PokemonDescription from "./PokemonDescription.js";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolutions from "./PokemonEvolutions";
import ItemGrid from "./ItemGrid";

// Components
import Header from "./Components/Header";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Hooks
import { GenProvider } from "./GenerationState";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
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
          <Route path="items" element={<ItemGrid />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
