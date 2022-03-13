import { v4 as uuidv4 } from "uuid";

//Components
import Move from "../Move";

//Styles
import {
  Wrapper,
  MoveListTitle,
  MoveListContainer,
  MoveContainer,
  MoveCell,
  MoveHeaderContainer,
} from "./MoveList.styles";

const MoveHeader = ({ isLevel, title }) => {
  return (
    <MoveHeaderContainer>
      <MoveListTitle backgroundColor={"var(--pokedexBlue)"}>
        {title}
      </MoveListTitle>

      <MoveContainer isLevel={isLevel} isHeader={true}>
        {isLevel ? <MoveCell>Level</MoveCell> : null}
        <MoveCell>Name</MoveCell>
        <MoveCell>Type</MoveCell>
        <MoveCell>Atk Type</MoveCell>
        <MoveCell>Pow</MoveCell>
        <MoveCell>Acc</MoveCell>
        <MoveCell>PP</MoveCell>
        <MoveCell isEffect={true}>Effect</MoveCell>
      </MoveContainer>
    </MoveHeaderContainer>
  );
};

const MoveList = ({ moveSet, isLevel, title }) => {
  // console.log("moveset", moveSet);
  return (
    <Wrapper>
      <MoveHeader isLevel={isLevel} title={title}></MoveHeader>
      <MoveListContainer>
        {moveSet.map((move) => {
          return <Move move={move} isLevel={isLevel} key={uuidv4()} />;
        })}
      </MoveListContainer>
    </Wrapper>
  );
};

export default MoveList;
