//Styles
import { MoveContainer, MoveCell } from "./Move.styles";

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

const Move = ({ move, isLevel }) => {
  const { level } = move;
  let moveEffectText;

  if (move.pokemon_v2_moveeffect != null) {
    if (
      move.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0] != null
    ) {
      moveEffectText =
        move.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0].effect;
    }
  } else {
    moveEffectText = "Not provided by API";
  }

  return (
    <MoveContainer isLevel={isLevel}>
      {level ? <MoveCell>{level}</MoveCell> : null}
      <MoveCell isName={true}>{move.name}</MoveCell>
      <MoveCell>{types[move.type_id - 1]}</MoveCell>
      <MoveCell>{atkTypes[move.move_damage_class_id - 1]}</MoveCell>
      <MoveCell>{move.power}</MoveCell>
      <MoveCell>{move.accuracy}</MoveCell>
      <MoveCell>{move.pp}</MoveCell>
      <MoveCell>{moveEffectText}</MoveCell>
    </MoveContainer>
  );
};

export default Move;
