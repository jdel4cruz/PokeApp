import { useState } from "react";

//Components
import Grid from "../../Components/Grid";
import ItemPopup from "../../Components/ItemPopup";

// Styles
import { Wrapper, Overlay } from "./ItemGrid.style";
//Hooks
import { useItemFetch } from "../../Hooks/useItemFetch";

const ItemGrid = () => {
  const { popup, setPopup, cards, setFilterSort } = useItemFetch();

  if (cards == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <Grid>{cards}</Grid>
      <Overlay popup={popup} />
      <ItemPopup data={popup} setPopup={setPopup} />
    </Wrapper>
  );
};

export default ItemGrid;
