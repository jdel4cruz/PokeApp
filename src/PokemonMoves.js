import { useParams } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

//Components
import PokemonNav from "./Components/PokemonNav";

//Hooks
import { usePokemonMoveFetch } from "./Hooks/usePokemonMoveFetch";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const MoveListContainer = styled.ul`
  list-style: none;

  width: var(--maxWidth);
  border: 1px solid black;
  padding: 0;
  background-color: ${(props) => props.backgroundColor || ""};
`;

const MoveContainer = styled.li`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLevel
      ? "4rem 10rem 6rem 8rem 4rem 4rem 4rem 1fr"
      : "10rem 6rem 8rem 4rem 4rem 4rem 1fr"};
  border: 1px solid black;

  div {
    font-size: ${(props) => (props.isHeader ? "var(--fontMed)" : "")};
  }
`;

const MoveCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};
`;

const MoveListTitle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  font-size: var(--fontLarge);
  background-color: ${(props) => props.backgroundColor || ""};
`;

const types = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];
const atkTypes = ["Status", "Phys", "Spec"];

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

const Move = ({ move, isLevel }) => {
  const { level } = move;
  const moveData = move.pokemon_v2_move;
  const moveEffectText =
    moveData.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0].effect;

  return (
    <MoveContainer isLevel={isLevel}>
      {level ? <MoveCell>{level}</MoveCell> : null}
      <MoveCell isName={true}>{moveData.name}</MoveCell>
      <MoveCell>{types[moveData.type_id - 1]}</MoveCell>
      <MoveCell>{atkTypes[moveData.move_damage_class_id - 1]}</MoveCell>
      <MoveCell>{moveData.power}</MoveCell>
      <MoveCell>{moveData.accuracy}</MoveCell>
      <MoveCell>{moveData.pp}</MoveCell>
      <MoveCell>{moveEffectText}</MoveCell>
    </MoveContainer>
  );
};

const MoveList = ({ moveSet, isLevel, title }) => {
  return (
    <MoveListContainer>
      <MoveHeader isLevel={isLevel} title={title}></MoveHeader>
      {moveSet.map((move) => {
        return <Move move={move} isLevel={isLevel} key={uuidv4()} />;
      })}
    </MoveListContainer>
  );
};

const PokemonMoves = () => {
  const { pokemonId } = useParams();
  const { moves } = usePokemonMoveFetch(pokemonId);

  if (moves == null) {
    return <div>loading</div>;
  }

  console.log(moves);
  const eggMoves = moves.eggMoves;
  const machineMoves = moves.machineMoves;
  const tutorMoves = moves.tutorMoves;
  const levelMoves = moves.levelMoves;

  console.log(eggMoves.length == true);

  return (
    <Wrapper>
      <div>
        <PokemonNav />
      </div>

      {levelMoves.length > 0 && (
        <MoveList
          moveSet={levelMoves}
          isLevel={true}
          title={"Learned by Level Up"}
        />
      )}

      {eggMoves.length > 0 && (
        <MoveList moveSet={eggMoves} isLevel={false} title={"Egg Moves"} />
      )}
      {tutorMoves.length > 0 && (
        <MoveList
          moveSet={tutorMoves}
          isLevel={false}
          title={"Learned by Tutor"}
        />
      )}
      {machineMoves.length > 0 && (
        <MoveList
          moveSet={machineMoves}
          isLevel={false}
          title={"Learned by TM"}
        />
      )}
    </Wrapper>
  );
};

export default PokemonMoves;
