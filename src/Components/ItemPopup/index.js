import { useEffect, useState } from "react";

//Styles
import {
  Wrapper,
  ImgContainer,
  ItemText,
  CloseButton,
  Name,
} from "./ItemPopup.styles";

const ItemPopup = ({ data, setPopup }) => {
  const [state, setState] = useState(data);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setState(data);
  }, [data]);

  useEffect(() => {
    setFadeIn(!fadeIn);
  }, [state]);

  return (
    <Wrapper isOpen={fadeIn}>
      <CloseButton onClick={() => setPopup(null)}>Close</CloseButton>
      <ImgContainer>
        <img src={state != null ? state.sprite : ""} />
      </ImgContainer>
      <ItemText>
        <Name>{state != null ? `Name: ${state.name}` : ""}</Name>
        <div>{state != null ? `Category: ${state.category}` : ""}</div>
        <div>{state != null ? `Effect Text: ${state.effectText}` : ""}</div>
        <div>{state != null ? `Cost: ${state.cost}` : ""}</div>
      </ItemText>
    </Wrapper>
  );
};

export default ItemPopup;
