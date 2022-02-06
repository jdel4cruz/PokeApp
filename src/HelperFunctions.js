import { type } from "@testing-library/user-event/dist/type";
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "./Components/Card";

export const cardGenerator = (data, filterSort, page, limit) => {
  console.log("creating cards");
  const cards = data.map((item, i) => (
    <Card
      img={item.sprite}
      name={item.name}
      id={item.id}
      key={i - limit + page * limit}
      filterSort={filterSort}
    />
  ));
  console.log(cards);
  return cards;
};

export const keyGenerator = (data) =>
  data.forEach((item) => (item.key = uuidv4()));

export const spriteGenerator = (data) =>
  data.forEach(
    (item) =>
      (item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`)
  );

export const calcDamageFactor = (weakness1, weakness2) => {
  console.log(weakness2);
  const calc = weakness1.map((type, i) =>
    weakness2.length > 1
      ? (type.damage_factor * weakness2[i].damage_factor) / 100
      : type.damage_factor
  );

  return calc;
};

export const updateMoveText = (data) =>
  Object.keys(data).forEach((moveList) => {
    data[moveList].forEach((move) => {
      const moveData = move.pokemon_v2_move;
      const moveEffectChance = moveData.move_effect_chance;

      moveData.name = moveData.name.replace("-", " ");

      if (moveEffectChance != null) {
        const effectTextData =
          move.pokemon_v2_move.pokemon_v2_moveeffect
            .pokemon_v2_moveeffecteffecttexts[0];

        effectTextData.effect = effectTextData.effect.replaceAll(
          "$effect_chance%",
          `${moveEffectChance}%`
        );
      }
    });
  });

export const generateEvoTiers = (evoChain) => {
  const visited = new Array(evoChain.length);
  visited[0] = true;

  const evoTiers = new Array();

  evoTiers.push(new Array(evoChain[0]));

  let prevEvoId = new Array();
  prevEvoId.push(evoChain[0].id);

  while (prevEvoId.length) {
    const evoTier = new Array();
    const nextIds = new Array();

    prevEvoId.forEach((id) => {
      evoChain.forEach((pokemon, i) => {
        if (!visited[i]) {
          if (pokemon.evolves_from_species_id == id) {
            evoTier.push(pokemon);
            nextIds.push(pokemon.id);
            visited[i] = true;
          }
        }
      });
    });

    evoTier.length && evoTiers.push(evoTier);

    prevEvoId = nextIds;
  }

  return evoTiers;
};
