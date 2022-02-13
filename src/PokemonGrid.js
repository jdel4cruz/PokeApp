import { useEffect, useState } from "react";
import styled from "styled-components";

//Components
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Pagination from "./Components/Pagination";
import PokemonFilter from "./Components/PokemonFilter";

//Hooks
import { usePokemonGridFetch } from "./Hooks/usePokemonGridFetch";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  width: 100%;
  overflow: hidden;
  align-items: center;
  gap: 2rem 0;
`;

const GridOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  bottom: 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  display: inline;
  background-color: var(--pokedexGreen);
  border-radius: 10px;
`;

const Pokemon = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { cards, limit, setLimit, page, setPage, filterSort, setFilterSort } =
    usePokemonGridFetch();

  return (
    <Wrapper>
      <PokemonFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        setPage={setPage}
      ></PokemonFilter>
      <Grid>{cards}</Grid>
      <GridOptions>
        <Button
          onClick={(e) => {
            console.log(e.target.innerText);
            setPage((prevPage) => prevPage + 1);
          }}
        >
          Load More
        </Button>
        <Button
          onClick={(e) => {
            setOpenFilter(!openFilter);
          }}
        >
          Filter/Sort
        </Button>
      </GridOptions>
    </Wrapper>
  );
};

export default Pokemon;
