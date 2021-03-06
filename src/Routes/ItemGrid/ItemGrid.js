import { useState } from "react";

//Components
import Grid from "../../Components/Grid";
import ItemPopup from "../../Components/ItemPopup";
import ItemFilter from "../../Components/ItemFilter";

// Styles
import {
  Wrapper,
  Overlay,
  Button,
  GridOptions,
  SearchBar,
  SearchContainer,
  SearchBarContainer,
  SearchLabel,
} from "./ItemGrid.style";

//Hooks
import { useItemFetch } from "../../Hooks/useItemFetch";

const ItemGrid = () => {
  const {
    popup,
    setPopup,
    cards,
    filterSort,
    setFilterSort,
    setPage,
    setDebouncedTerm,
  } = useItemFetch();
  const [isOpen, setIsOpen] = useState(false);

  if (cards == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <SearchContainer>
        <SearchBarContainer>
          <SearchLabel htmlFor="searchBar">Search: </SearchLabel>
          <SearchBar
            type="text"
            placeholder="Search item name!"
            id="searchBar"
            onChange={(e) => setDebouncedTerm(e.target.value)}
          />
        </SearchBarContainer>
        <SearchBarContainer>
          <Button
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}
            isOpen={isOpen}
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

      <ItemFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={isOpen}
        setOpenFilter={setIsOpen}
        setPage={setPage}
      />
      <Grid>{cards}</Grid>
      <Overlay isOpen={isOpen} popup={popup} />
      <ItemPopup data={popup} setPopup={setPopup} />
    </Wrapper>
  );
};

export default ItemGrid;
