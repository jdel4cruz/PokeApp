import styled from "styled-components";
import { useParams } from "react-router-dom";

//Hooks
import { usePokemonEvolutionsFetch } from "./Hooks/usePokemonEvolutionsFetch";

//Components
import PokemonEvoChart from "./Components/PokemonEvoChart";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;
`;

const PokemonEvolutions = () => {
  const { pokemonId } = useParams();

  const { state } = usePokemonEvolutionsFetch(pokemonId);

  if (state == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <PokemonEvoChart evoTiers={state} />
    </Wrapper>
  );
};

export default PokemonEvolutions;
