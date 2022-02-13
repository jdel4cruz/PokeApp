import { useEffect, useState } from "react";

//Styles
import {
  Wrapper,
  ImgContainer,
  ItemText,
  CloseButton,
} from "./ItemPopup.styles";

const ItemPopup = ({ data }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(data);
  }, [data]);

  if (state == null) {
    return <div>loading</div>;
  }

  const { sprite, name, category, effectText, cost } = state;

  return (
    <Wrapper>
      <CloseButton />
      <ImgContainer>
        <img src={sprite} />
      </ImgContainer>
      <ItemText>
        <div>{`Name: ${name}`}</div>
        <div>{`Category: ${category}`}</div>
        <div>{`Effect Text: ${effectText}`}</div>
        <div>{`Cost: ${cost}`}</div>
      </ItemText>
    </Wrapper>
  );
};

export default ItemPopup;
