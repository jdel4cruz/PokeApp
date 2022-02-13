import { type } from "@testing-library/user-event/dist/type";
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "./Components/Card";
import ItemCard from "./Components/ItemCard";

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

export const itemCardGenerator = (data, filterSort, page, limit, setPopup) => {
  console.log("Creating item cards");
  const cards = data.map((item, i) => (
    <ItemCard
      sprite={item.sprite}
      cost={item.cost}
      name={item.name}
      id={item.id}
      key={i - limit + page * limit}
      filterSort={filterSort}
      setPopup={setPopup}
      effectText={item.itemEffect[0].effect}
    />
  ));

  return cards;
};

export const keyGenerator = (data) =>
  data.forEach((item) => (item.key = uuidv4()));

export const itemSpriteGenerator = (data) =>
  data.forEach(
    (item) =>
      (item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`)
  );

export const pokemonSpriteGenerator = (data) =>
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

  pokemonSpriteGenerator(evoChain);
  console.log("evochain", evoChain);

  evoChain.forEach((pokemon) => {
    const evoConditions = pokemon.pokemon_v2_pokemonevolutions;

    if (evoConditions.length) {
      updateEvoCondition(pokemon.pokemon_v2_pokemonevolutions[0]);
      buildEvoCondition(pokemon);
    }
  });
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

export const updateEvoCondition = (data) => {
  Object.keys(data).forEach((key) => {
    if (!data[key] && data[key] !== 0) {
      delete data[key];
      return;
    }

    evoConditions(data, key);
  });
};

const capitalizeFirstLetterEachWord = (string) => {
  const words = string.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};

const evoConditions = (data, key) => {
  let property = data[key];

  switch (key) {
    case "affection":
      data[key] = `with ${property} affection`;
      break;
    case "atkIsGreater":
      data[key] = `with atk ${
        property > 0 ? "greater than" : property < 0 ? "less than" : "equal to"
      } defense`;
      break;
    case "beauty":
      data[key] = "max beauty";
      break;
    case "gender":
      data[key] = `a ${property.name}`;
      break;
    case "happiness":
      data[key] = "with max happiness";
      break;
    case "heldItem":
      property.name = property.name.replaceAll("-", " ");
      property.name = capitalizeFirstLetterEachWord(property.name);
      data[key] = `with ${property.name} held`;
      break;
    case "learnedMove":
      property.name = property.name.replace("-", " ");
      data[key] = `with ${property.name} learned`;
      break;
    case "level":
      data[key] = `to level ${property}`;
      break;
    case "location":
      data[key] = `Not available through from the API`;
      break;
    case "moveType":
      data[key] = `with ${property.name} type move learned`;
      break;
    case "needsRain":
      data[key] = "while raining";
      break;
    case "time":
      data[key] = `during ${property}`;
      break;
    case "tradeWith":
      property.name = property.name.replaceAll("-", " ");
      data[key] = `with ${property.name}`;
      break;
    case "useItem":
      property.name = property.name.replaceAll("-", " ");
      property.name = capitalizeFirstLetterEachWord(property.name);

      data[key] = `${property.name}`;
      break;
    case "evoTrigger":
      property.name = property.name.replaceAll("-", " ");
      property.name = property.name.replace(" item", "");
      property.name =
        property.name.charAt(0).toUpperCase() + property.name.slice(1);

      data[key] = `${property.name}`;
      break;
    default:
      console.log(`${key} was not found under pokemon properties`);
  }
};

const buildEvoCondition = (pokemon) => {
  const evoConditions = pokemon.pokemon_v2_pokemonevolutions[0];

  let evoCondition = evoConditions.evoTrigger;

  Object.keys(evoConditions).forEach((key) => {
    if (key != "evoTrigger" && key != "level") {
      evoCondition = `${evoCondition} ${evoConditions[key]}`;
    }
  });

  if (evoConditions.level) {
    evoCondition = `${evoCondition} ${evoConditions.level}`;
  }

  pokemon.evoCondition = evoCondition;
};
