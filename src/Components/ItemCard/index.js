import { useState, useEffect } from "react";

//Styles
import { Wrapper, CardImg, CardText } from "./ItemCard.styles";

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
    <Wrapper
      className={!isValid ? "broken" : ""}
      onClick={() => setPopup(data)}
    >
      <CardImg
        src={sprite}
        alt="Card Img"
        onError={() => isValid && setIsValid(false)}
      />
      <CardText>
        <div>{name}</div>
        {id && <div>{id}</div>}
      </CardText>
    </Wrapper>
  );
};

export default ItemCard;
