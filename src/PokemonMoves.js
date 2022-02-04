import { useParams } from "react-router-dom";
import styled from "styled-components";

//Hooks
import { usePokemonMoveFetch } from "./Hooks/usePokemonMoveFetch";

const Wrapper = styled.div``;

const MoveListContainer = styled.ul`
  list-style: none;

  padding: 3rem;
`;

const MoveContainer = styled.li`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLevel
      ? "4rem 10rem 6rem 6rem 4rem 4rem 4rem 1fr"
      : "10rem 6rem 6rem 4rem 4rem 4rem 1fr"};
  border: 1px solid black;
`;

const MoveCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
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
const atkTypes = ["Phys", "Spec", "Status"];

const MoveHeader = ({ isLevel }) => {
  return (
    <MoveContainer isLevel={isLevel}>
      {isLevel ? <MoveCell>Level</MoveCell> : null}
      <MoveCell>Name</MoveCell>
      <MoveCell>Type</MoveCell>
      <MoveCell>Atk Type</MoveCell>
      <MoveCell>Pow</MoveCell>
      <MoveCell>Acc</MoveCell>
      <MoveCell>PP</MoveCell>
      <MoveCell>Effect</MoveCell>
    </MoveContainer>
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
      <MoveCell>{moveData.name}</MoveCell>
      <MoveCell>{types[moveData.type_id - 1]}</MoveCell>
      <MoveCell>{atkTypes[moveData.move_damage_class_id - 1]}</MoveCell>
      <MoveCell>{moveData.power}</MoveCell>
      <MoveCell>{moveData.accuracy}</MoveCell>
      <MoveCell>{moveData.pp}</MoveCell>
      <MoveCell>
        {moveData.move_effect_chance != null
          ? moveEffectText.replaceAll(
              "$effect_chance%",
              `${moveData.move_effect_chance}%`
            )
          : moveEffectText}
      </MoveCell>
    </MoveContainer>
  );
};

const MoveList = ({ moveSet, isLevel }) => {
  return (
    <MoveListContainer>
      <MoveHeader isLevel={isLevel}></MoveHeader>
      {moveSet.map((move) => {
        return <Move move={move} isLevel={isLevel} />;
      })}
    </MoveListContainer>
  );
};

const PokemonMoves = () => {
  const { pokemonId } = useParams();
  const { moves } = usePokemonMoveFetch(pokemonId);
  console.log(moves);

  if (moves == null) {
    return <div>loading</div>;
  }

  const eggMoves = moves.eggMoves;

  //   const machineMoves = moves.machineMoves;
  //   const tutorMoves = moves.tutorMoves;
  const levelMoves = moves.levelMoves;
  console.log(levelMoves);
  return (
    <Wrapper>
      <MoveList moveSet={levelMoves} isLevel={true} />
      <MoveList moveSet={eggMoves} isLevel={false} />
    </Wrapper>
  );
};

export default PokemonMoves;
