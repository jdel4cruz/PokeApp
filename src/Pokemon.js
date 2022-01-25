import { useEffect, useState } from "react";
import styled from "styled-components";

//Components
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Pagination from "./Components/Pagination";
import PokemonFilter from "./Components/PokemonFilter";

//Helpers
import { cardGenerator } from "./HelperFunctions";

//Hooks
import { usePokemonGridFetch } from "./Hooks/usePokemonGridFetch";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
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
      <Header />
      <PokemonFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={openFilter}
      ></PokemonFilter>
      <Grid>{cards}</Grid>
      <GridOptions>
        <Pagination />
        <Button
          onClick={(e) => {
            console.log(e.target.innerText);
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
