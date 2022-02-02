import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

//Styles
import { Wrapper, CardImg, CardText } from "./Card.Styles";

const Card = ({ img, name, id, filterSort }) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(true);
  }, [filterSort]);

  return (
    <Link to={`/pokemon/${id}`}>
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
    </Link>
  );
};

export default Card;
