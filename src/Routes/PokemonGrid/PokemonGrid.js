import { useState } from "react";

//Components
import Grid from "../../Components/Grid";
import PokemonFilter from "../../Components/PokemonFilter";

//Styles
import {
  Wrapper,
  Button,
  Overlay,
  SearchContainer,
  SearchBarContainer,
  SearchBar,
  SearchLabel,
} from "./PokemonGrid.styles";

//Hooks
import { usePokemonGridFetch } from "../../Hooks/usePokemonGridFetch";

const Pokemon = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const {
    cards,
    limit,
    setLimit,
    page,
    setPage,
    filterSort,
    setFilterSort,
    setDebouncedTerm,
  } = usePokemonGridFetch();

  return (
    <Wrapper>
      <SearchContainer>
        <SearchBarContainer>
          <SearchLabel htmlFor="searchBar">Search: </SearchLabel>
          <SearchBar
            type="text"
            placeholder="Search Pokemon name!"
            id="searchBar"
            onChange={(e) => setDebouncedTerm(e.target.value)}
          />
        </SearchBarContainer>
        <SearchBarContainer>
          <Button
            onClick={(e) => {
              setOpenFilter(!openFilter);
            }}
            openFilter={openFilter}
          >
            Filter/Sort
          </Button>
          <Button
            onClick={(e) => {
              console.log(e.target.innerText);
              setPage((prevPage) => prevPage + 1);
            }}
          >
            Load More
          </Button>
        </SearchBarContainer>
      </SearchContainer>

      <PokemonFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        setPage={setPage}
      ></PokemonFilter>
      <Grid>{cards}</Grid>
      <Overlay openFilter={openFilter} />
    </Wrapper>
  );
};

export default Pokemon;
