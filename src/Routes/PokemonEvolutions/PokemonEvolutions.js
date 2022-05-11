import { useParams } from "react-router-dom";

//Components
import PokemonEvoChart from "../../Components/PokemonEvoChart";

// Styles
import { Wrapper } from "./PokemonEvolutions.styles";

//Hooks
import { usePokemonEvolutionsFetch } from "../../Hooks/usePokemonEvolutionsFetch";

const PokemonEvolutions = () => {
  const { pokemonId } = useParams();

  const { state } = usePokemonEvolutionsFetch(pokemonId);

  if (state === null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <PokemonEvoChart evoTiers={state} />
    </Wrapper>
  );
};

export default PokemonEvolutions;
