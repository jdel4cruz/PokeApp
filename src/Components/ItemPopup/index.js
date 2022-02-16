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
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(data);
  }, [data]);

  if (state == null) {
    return null;
  }

  const { sprite, name, category, effectText, cost } = state;

  return (
    <Wrapper>
      <CloseButton onClick={() => setPopup(null)} />
      <ImgContainer>
        <img src={sprite} />
      </ImgContainer>
      <ItemText>
        <Name>{`Name: ${name}`}</Name>
        <div>{`Category: ${category}`}</div>
        <div>{`Effect Text: ${effectText}`}</div>
        <div>{`Cost: ${cost}`}</div>
      </ItemText>
    </Wrapper>
  );
};

export default ItemPopup;
