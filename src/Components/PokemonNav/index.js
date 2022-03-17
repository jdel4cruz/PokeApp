//Styles
import { useParams } from "react-router-dom";
import { Wrapper, StyledLink } from "./PokemonNav.styles";

const PokemonNav = ({ currentRoute, hasEvo }) => {
  const { pokemonId: id } = useParams();

  return (
    <Wrapper>
      <StyledLink
        to={`/pokemon/${id}`}
        isCurrent={currentRoute === "pokemon" ? true : false}
      >
        Pokemon
      </StyledLink>
      <StyledLink
        to={`/pokemon/${id}/moves`}
        isCurrent={currentRoute === "moves" ? true : false}
      >
        Moves
      </StyledLink>
      <StyledLink
        to={`/pokemon/${id}/evo`}
        isCurrent={currentRoute === "evo" ? true : false}
        active={hasEvo ? "flex" : "none"}
      >
        Evolutions
      </StyledLink>
    </Wrapper>
  );
};

export default PokemonNav;
