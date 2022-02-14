import { useState, useEffect } from "react";

//Styles
import { Wrapper, CardImg, CardText, StyledLink } from "./Card.Styles";

const Card = ({ img, name, id, filterSort }) => {
  // If part of a cards data is not available from the API and an error is thrown upon card generation, this state is used to set className isValid on the Wrapper to "broken". This in turn sets display: none
  const [isValid, setIsValid] = useState(true);

  // I ended up needing this in order to reset a given card if they were turned off due to a previous error when changing filters.
  // Without this, the card would continue to be turned off even when the filters were changed and the current group of pokemon had no issues.
  // There's probably a better way to address this that I doni't know
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
