//Components
import Grid from "../../Components/Grid";
import ItemPopup from "../../Components/ItemPopup";

// Styles
import { Wrapper } from "./ItemGrid.style";
//Hooks
import { useItemFetch } from "../../Hooks/useItemFetch";

const ItemGrid = () => {
  const { popup, setPopup, cards, setFilterSort } = useItemFetch();

  if (cards == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <ItemPopup data={popup} />
      <Grid>{cards}</Grid>;
    </Wrapper>
  );
};

export default ItemGrid;
