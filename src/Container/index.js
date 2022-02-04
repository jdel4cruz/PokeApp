import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Sidebar from "../Components/Sidebar";
import PokemonGrid from "../PokemonGrid";
import Home from "../Home";
import PokemonDescription from "../PokemonDescription.js";
import PokemonMoves from "../PokemonMoves";

//Styles
import { Wrapper } from "./Container.styles";

const Container = () => (
  <Router>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<PokemonGrid />} />
        <Route path="pokemon/:pokemonId" element={<PokemonDescription />} />
        <Route path="pokemon/:pokemonId/moves" element={<PokemonMoves />} />
      </Routes>
    </Wrapper>
  </Router>
);

export default Container;
