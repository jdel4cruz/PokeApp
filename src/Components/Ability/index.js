//Styles
import { AbilityContainer, AbilityCell } from "./Ability.styles";

const Ability = ({ ability }) => {
  let abilityEffectText;

  //   console.log(ability);

  if (ability.abilityEffect.length > 0) {
    abilityEffectText = ability.abilityEffect[0].effect;
  } else {
    abilityEffectText = "Not provided by API";
  }

  return (
    <AbilityContainer>
      <AbilityCell isName={true}>{ability.name}</AbilityCell>
      <AbilityCell>{ability.id}</AbilityCell>
      <AbilityCell>{abilityEffectText}</AbilityCell>
    </AbilityContainer>
  );
};

export default Ability;
