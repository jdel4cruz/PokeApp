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

const PokemonAccordion = styled(Accordion)`
  width: 50%;
`;

const PokemonInfo = ({ name, id, types, abilities }) => {
  if (types == null) {
    return <div>loading</div>;
  }
  console.log(abilities);

  return (
    <Wrapper>
      <TextContainer>
        <PokemonNameNav>
          <PokemonName>{name}</PokemonName> <PokemonNav />
        </PokemonNameNav>
        <PokemonType>
          {types.length > 1 ? `${types[0]}/${types[1]}` : `${types[0]}`}
        </PokemonType>
        <PokemonAbilities>
          <PokemonAccordion data={abilities} />
        </PokemonAbilities>
      </TextContainer>
    </Wrapper>
  );
};

export default PokemonInfo;
