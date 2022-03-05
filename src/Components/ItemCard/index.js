import { useState, useEffect } from "react";

//Styles
import {
  OuterWrapper,
  InnerWrapper,
  Corner,
  CardImg,
  CardText,
  CardId,
  CardName,
  ImgContainer,
} from "./ItemCard.styles";

const ItemCard = ({
  sprite,
  cost,
  category,
  name,
  id,
  effectText,
  filterSort,
  setPopup,
}) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(true);
  }, [filterSort]);

  const data = { sprite, name, effectText, cost, category };

  return (
    <div>
      <OuterWrapper
        className={!isValid ? "broken" : ""}
        onClick={() => setPopup(data)}
      >
        <InnerWrapper>
          <ImgContainer>
            <CardImg
              src={sprite}
              alt="Card Img"
              onError={() => isValid && setIsValid(false)}
            />
          </ImgContainer>

          <CardText>
            {id && <CardId>{id}</CardId>}
            <CardName>{name}</CardName>
          </CardText>
        </InnerWrapper>
        <Corner />
      </OuterWrapper>
    </div>
  );
};

export default ItemCard;
