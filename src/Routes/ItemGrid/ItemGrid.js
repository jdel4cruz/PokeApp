import { useState } from "react";

//Components
import Grid from "../../Components/Grid";
import ItemPopup from "../../Components/ItemPopup";

// Styles
import { Wrapper, Overlay, Button, GridOptions } from "./ItemGrid.style";

//Hooks
import { useItemFetch } from "../../Hooks/useItemFetch";

const ItemGrid = () => {
  const { popup, setPopup, cards, setFilterSort, setPage } = useItemFetch();

  if (cards == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <Grid>{cards}</Grid>
      <Overlay popup={popup} />
      <ItemPopup data={popup} setPopup={setPopup} />
      <GridOptions>
        <Button
          onClick={(e) => {
            console.log(e.target.innerText);
            setPage((prevPage) => prevPage + 1);
          }}
        >
          Load More
        </Button>
      </GridOptions>
    </Wrapper>
  );
};

export default ItemGrid;
