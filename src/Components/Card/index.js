import { useState } from "react";

//Styles
import { Wrapper, CardImg, CardText } from "./Card.Styles";

const Card = ({ img, name, id }) => {
  const [isValid, setIsValid] = useState(true);

  return (
    <Wrapper className={!isValid && "broken"}>
      <CardImg
        src={img}
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

export default Card;
