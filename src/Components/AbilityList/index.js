import { v4 as uuidv4 } from "uuid";

//Components
import Ability from "../Ability";

//Styles
import {
  Wrapper,
  AbilityListTitle,
  AbilityListContainer,
  AbilityContainer,
  AbilityCell,
  AbilityHeaderContainer,
} from "./AbilityList.styles";

const AbilityHeader = ({ isLevel, title }) => {
  return (
    <AbilityHeaderContainer>
      <AbilityListTitle backgroundColor={"var(--pokedexBlue)"}>
        {title}
      </AbilityListTitle>

      <AbilityContainer isLevel={isLevel} isHeader={true}>
        {isLevel ? <AbilityCell>Level</AbilityCell> : null}
        <AbilityCell>Name</AbilityCell>
        <AbilityCell>Id</AbilityCell>
        <AbilityCell>Effect</AbilityCell>
      </AbilityContainer>
    </AbilityHeaderContainer>
  );
};

const AbilityList = ({ abilities, title }) => {
  return (
    <Wrapper>
      <AbilityHeader title={title}></AbilityHeader>
      <AbilityListContainer>
        {abilities.map((ability) => {
          return <Ability ability={ability} key={uuidv4()} />;
        })}
      </AbilityListContainer>
    </Wrapper>
  );
};

export default AbilityList;
