import { useState, useEffect } from "react";

//Styles
import {
  Wrapper,
  Wrapper2,
  CardImg,
  CardText,
  StyledLink,
  Corner,
  CardId,
  CardName,
  ImgContainer,
} from "./Card.Styles";

const PokemonCard = ({ img, name, pokemonId, filterSort }) => {
  // If part of a cards data is not available from the API and an error is thrown upon card generation, this state is used to set className isValid on the Wrapper to "broken". This in turn sets display: none
  const [isValid, setIsValid] = useState(true);

  // I ended up needing this in order to reset a given card if they were turned off due to a previous error when changing filters.
  // Without this, the card would continue to be turned off even when the filters were changed and the current group of pokemon had no issues.
  // There's probably a better way to address this that I doni't know
  useEffect(() => {
    setIsValid(true);
  }, [filterSort]);

  return (
    <StyledLink to={`/pokemon/${pokemonId}`}>
      <Wrapper className={!isValid ? "broken" : ""}>
        <Wrapper2>
          <ImgContainer>
            <CardImg
              src={img}
              alt="Img not supported by the API"
              onError={() => isValid && setIsValid(false)}
            />
          </ImgContainer>
          <CardText>
            <CardId>{pokemonId}</CardId>
            <CardName>{name}</CardName>
          </CardText>
        </Wrapper2>
        <Corner />
      </Wrapper>
    </StyledLink>
  );
};

export default PokemonCard;
