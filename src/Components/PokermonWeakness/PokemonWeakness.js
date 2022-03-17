//Components
import TypeChart from "../TypeChart";
import Header from "../Header";
import { useParams } from "react-router-dom";

// Styles
import { Wrapper } from "./PokemonWeakness.styles";

//Hooks
import { usePokemonWeaknessFetch } from "../../Hooks/usePokemonWeaknessFetch";

//Helper Functions
import { calcDamageFactor } from "../../HelperFunctions/HelperFunctions";

const PokemonWeakness = () => {
  const { pokemonId } = useParams();
  const { typeData } = usePokemonWeaknessFetch(pokemonId);

  if (typeData == null) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <TypeChart
        weakness={calcDamageFactor(typeData.weakness1, typeData.weakness2)}
      />
    </Wrapper>
  );
};

export default PokemonWeakness;
