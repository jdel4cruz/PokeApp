import { v4 as uuidv4 } from "uuid";

//Components
import Move from "../Move";

//Styles
import {
  MoveListTitle,
  MoveListContainer,
  MoveContainer,
  MoveCell,
} from "./MoveList.styles";

const MoveHeader = ({ isLevel, title }) => {
  return (
    <>
      <MoveListTitle backgroundColor={"var(--pokedexGreen)"}>
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
        <MoveCell>Effect</MoveCell>
      </MoveContainer>
    </>
  );
};

const MoveList = ({ moveSet, isLevel, title }) => {
  console.log("moveset", moveSet);
  return (
    <MoveListContainer>
      <MoveHeader isLevel={isLevel} title={title}></MoveHeader>
      {moveSet.map((move) => {
        return <Move move={move} isLevel={isLevel} key={uuidv4()} />;
      })}
    </MoveListContainer>
  );
};

export default MoveList;
