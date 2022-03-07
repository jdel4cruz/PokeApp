import { useState } from "react";

//Components
import Grid from "../../Components/Grid";
import ItemPopup from "../../Components/ItemPopup";
import ItemFilter from "../../Components/ItemFilter";

// Styles
import { Wrapper, Overlay, Button, GridOptions } from "./ItemGrid.style";

//Hooks
import { useItemFetch } from "../../Hooks/useItemFetch";

const ItemGrid = () => {
  const { popup, setPopup, cards, filterSort, setFilterSort, setPage } =
    useItemFetch();
  const [isOpen, setIsOpen] = useState(false);

  if (cards == null) {
    return <div>Loading</div>;
  }

  console.log(cards);

  return (
    <Wrapper>
      <ItemFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={isOpen}
        setOpenFilter={setIsOpen}
        setPage={setPage}
      />
      <Grid>{cards}</Grid>
      <Overlay isOpen={isOpen} />
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
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
        >
          Filter/Sort
        </Button>
      </GridOptions>

      <ItemPopup data={popup} setPopup={setPopup} />
    </Wrapper>
  );
};

export default ItemGrid;
