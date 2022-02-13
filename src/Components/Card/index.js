import { useState, useEffect } from "react";

//Styles
import { Wrapper, CardImg, CardText, StyledLink } from "./Card.Styles";

const Card = ({ img, name, id, filterSort }) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(true);
  }, [filterSort]);

  return (
    <StyledLink to={`/pokemon/${id}`}>
      <Wrapper className={!isValid ? "broken" : ""}>
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
    </StyledLink>
  );
};

export default Card;
