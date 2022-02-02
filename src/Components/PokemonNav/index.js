//Styles
import { Wrapper, StyledLink } from "./PokemonNav.styles";

const PokemonNav = ({ id }) => (
  <Wrapper>
    {/* <StyledLink to={`/pokemon/${id}/weakness`}>Weaknesses</StyledLink> */}
    <StyledLink to={`/pokemon/${id}/moves`}>Moves</StyledLink>
    <StyledLink to={`/pokemon/${id}/evo`}>Evolutions</StyledLink>
    <StyledLink to={`/pokemon/${id}/locations`}>Locations</StyledLink>
  </Wrapper>
);

export default PokemonNav;
