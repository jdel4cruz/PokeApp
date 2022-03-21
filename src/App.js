import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Routes
import PokemonGrid from "./Routes/PokemonGrid/PokemonGrid.js";
import Home from "./Routes/Home";
import PokemonDescription from "./Routes/PokemonDescription/PokemonDescription.js";
import PokemonMoves from "./Routes/PokemonMoves/PokemonMoves";
import PokemonEvolutions from "./Routes/PokemonEvolutions/PokemonEvolutions.js";
import ItemGrid from "./Routes/ItemGrid/ItemGrid.js";
import AllMoves from "./Routes/AllMoves/AllMoves.js";
import AllAbilities from "./Routes/AllAbilities";
import { ErrorPage } from "./Routes/ErrorPage/ErrorPage.js";

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
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
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
          <Route path="moves" element={<AllMoves />} />
          <Route path="abilities" element={<AllAbilities />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
