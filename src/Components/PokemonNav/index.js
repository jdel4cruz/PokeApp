//Styles
import { useParams } from "react-router-dom";
import { Wrapper, StyledLink } from "./PokemonNav.styles";

const PokemonNav = () => {
  const { pokemonId: id } = useParams();
  return (
    <Wrapper>
      <StyledLink to={`/pokemon/${id}`}>Pokemon</StyledLink>
      <StyledLink to={`/pokemon/${id}/moves`}>Moves</StyledLink>
      <StyledLink to={`/pokemon/${id}/evo`}>Evolutions</StyledLink>
    </Wrapper>
  );
};

export default PokemonNav;
