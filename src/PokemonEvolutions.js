import styled from "styled-components";
import { useParams } from "react-router-dom";

//Hooks
import { usePokemonEvolutionsFetch } from "./Hooks/usePokemonEvolutionsFetch";
import Pokemon from "./PokemonGrid";

const Wrapper = styled.div``;

const PokemonEvolutions = () => {
  const { pokemonId } = useParams();

  const { state } = usePokemonEvolutionsFetch(pokemonId);

  if (state == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <div>placeholder</div>
    </Wrapper>
  );
};

export default PokemonEvolutions;
