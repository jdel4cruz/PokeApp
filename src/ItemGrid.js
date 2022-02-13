import styled from "styled-components";

//Components
import Grid from "./Components/Grid";
import ItemPopup from "./Components/ItemPopup";

//Hooks
import { useItemFetch } from "./Hooks/useItemFetch";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: 100%;
  overflow: hidden;
  align-items: center;
  gap: 2rem 0;
`;

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
