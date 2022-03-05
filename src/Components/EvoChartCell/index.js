//Styles
import {
  Wrapper,
  ImgContainer,
  PokemonName,
  EvoCondition,
  StyledLink,
} from "./EvoChartCell.styles";

const EvoChartCell = ({ name, sprite, evoCondition, id }) => {
  return (
    <StyledLink to={`/pokemon/${id}`}>
      <Wrapper>
        <ImgContainer>
          <img src={sprite} />
        </ImgContainer>
        <PokemonName>{name}</PokemonName>
        <EvoCondition>{evoCondition}</EvoCondition>
      </Wrapper>
    </StyledLink>
  );
};

export default EvoChartCell;
