import styled from "styled-components";

//Components
import TypeChart from "./Components/TypeChart";
import Header from "./Components/Header";
import { useParams } from "react-router-dom";

//Hooks
import { usePokemonWeaknessFetch } from "./Hooks/usePokemonWeaknessFetch";

//Helper Functions
import { calcDamageFactor } from "./HelperFunctions";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
  flex-grow: 1;
  flex-shrink: 1;
`;

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
        type1={typeData.type1}
        type2={typeData.type2}
      />
    </Wrapper>
  );
};

export default PokemonWeakness;
