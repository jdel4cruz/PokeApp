import { useEffect, useState } from "react";

//Components
import Header from "../../Components/Header";
import Grid from "../../Components/Grid";
import Pagination from "../../Components/Pagination";
import PokemonFilter from "../../Components/PokemonFilter";

//Styles
import { Wrapper, GridOptions, Button, Overlay } from "./PokemonGrid.styles";

//Hooks
import { usePokemonGridFetch } from "../../Hooks/usePokemonGridFetch";

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
          openFilter={openFilter}
        >
          Filter/Sort
        </Button>
      </GridOptions>
      <Overlay openFilter={openFilter} />
    </Wrapper>
  );
};

export default Pokemon;
