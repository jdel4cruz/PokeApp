//Styles
import { useParams } from "react-router-dom";
import { Wrapper, StyledLink } from "./PokemonNav.styles";

const PokemonNav = ({ currentRoute, hasEvo }) => {
  const { pokemonId: id } = useParams();

  return (
    <Wrapper>
      <StyledLink
        to={`/pokemon/${id}`}
        current={currentRoute === "pokemon" ? "true" : "false"}
      >
        Pokemon
      </StyledLink>
      <StyledLink
        to={`/pokemon/${id}/moves`}
        current={currentRoute === "moves" ? "true" : "false"}
      >
        Moves
      </StyledLink>
      <StyledLink
        to={`/pokemon/${id}/evo`}
        current={currentRoute === "evo" ? "true" : "false"}
        active={hasEvo ? "flex" : "none"}
      >
        Evolutions
      </StyledLink>
    </Wrapper>
  );
};

export default PokemonNav;
