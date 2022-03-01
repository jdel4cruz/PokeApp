//Components
import PokemonNav from "../PokemonNav";
import Accordion from "../Accordion";
import styled from "styled-components";

//Styles
import {
  Wrapper,
  PokemonName,
  PokemonNameNav,
  PokemonType,
  PokemonAbilities,
  PokemonAbility,
  TextContainer,
} from "./PokemonInfo.styles";

// Helper functions
import { removeHyphen } from "../../HelperFunctions";

const PokemonAccordion = styled(Accordion)`
  width: 50%;
`;

const PokemonInfo = ({ name, id, types, abilities }) => {
  if (types == null) {
    return <div>loading</div>;
  }
  console.log(abilities);
  abilities.forEach((ability) => removeHyphen(ability, "title"));

  return (
    <Wrapper>
      <PokemonNameNav>
        <PokemonName>{name}</PokemonName> <PokemonNav />
      </PokemonNameNav>
      <PokemonType>
        type: {types.length > 1 ? `${types[0]}/${types[1]}` : `${types[0]}`}
      </PokemonType>
      <PokemonAbilities>
        <h3>Abilities:</h3>
        <PokemonAccordion data={abilities} />
      </PokemonAbilities>
    </Wrapper>
  );
};

export default PokemonInfo;
