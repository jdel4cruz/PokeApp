import { useState } from "react";
import styled from "styled-components";

//Helpers
import { cardGenerator } from "./HelperFunctions";

//Components
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Pagination from "./Components/Pagination";
import PokemonFilter from "./Components/Filter";

import { usePokemonGridFetch } from "./Hooks/usePokemonGridFetch";

import API from "./API";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  overflow: hidden;
  align-items: center;
  gap: 2rem 0;
`;

// const data = API.fetchPokemonGrid();
// console.log(data);

// API.fetchPokemonGrid().then((res) => console.log(res));

// const data = [
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
//   { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
//   { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
//   { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
// ];

// const cards = cardGenerator(data);
// console.log(data);

const Pokemon = () => {
  const { cards, setLimit, setPage } = usePokemonGridFetch();

  return (
    <Wrapper>
      <Header />
      <PokemonFilter></PokemonFilter>
      <Grid>{cards}</Grid>
      <Pagination />
    </Wrapper>
  );
};

export default Pokemon;
