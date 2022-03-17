import { v4 as uuidv4 } from "uuid";

//Components
import PokemonCard from "../Components/PokemonCard";
import ItemCard from "../Components/ItemCard";

import {
  evoConditions,
  buildEvoCondition,
  generateItemCategory,
} from "./constants";

//Functions to create the cards shown in their respective grids
export const pokemonCardGenerator = (data) => {
  console.log("creating cards");
  const cards = data.map((item) => (
    <PokemonCard
      img={item.sprite}
      name={item.name}
      pokemonId={item.id}
      key={item.id}
      data={{
        pokemonspecy: item.pokemon_v2_pokemonspecy,
        pokemontypes: item.pokemon_v2_pokemontypes,
        pokemonstats: item.pokemon_v2_pokemonstats,
      }}
    />
  ));
  console.log(cards);
  return cards;
};

export const itemCardGenerator = (data, setPopup) => {
  console.log("Creating item cards");
  const cards = data.map((item) => {
    let itemEffect;

    if (item.itemEffect.length > 0) {
      if (item.itemEffect[0].effect != null)
        itemEffect = item.itemEffect[0].effect;
    } else {
      itemEffect = "Not supported by API";
    }

    return (
      <ItemCard
        sprite={item.sprite}
        category={item.category}
        cost={item.cost}
        name={item.name}
        id={item.id}
        key={item.id}
        setPopup={setPopup}
        effectText={itemEffect}
      />
    );
  });

  return cards;
};

export const keyGenerator = (data) =>
  data.forEach((item) => (item.key = uuidv4()));

// Functions to set sprite properties to
export const itemSpriteGenerator = (item) =>
  (item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`);

export const pokemonSpriteGenerator = (data) =>
  data.forEach(
    (item) =>
      (item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`)
  );

// Calcs weakness values. If pokemon is dual typed it multiplies the 2 values and divides the result to get a single digit multiplier.
export const calcDamageFactor = (weakness1, weakness2) => {
  const calc = weakness1.map((type, i) =>
    weakness2.length > 1
      ? (type.damage_factor * weakness2[i].damage_factor) / 100
      : type.damage_factor
  );

  return calc;
};

// Goes into 4 different moveList objects (level up, egg, tutor, tm) and updates name and text. Aliases could be applied to the graphQL request to clean up some of the code
export const updateMoveText = (data) =>
  Object.keys(data).forEach((moveList) => {
    if (moveList === "evo") {
      return;
    }
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

// Does 2 things. For each Pokemon in the evolution chain, it makes function calls  It also places pokemon in their respective evo tiers based on the pokemon they previously evolve from
export const generateEvoTiers = (evoChain) => {
  // An array to ensure that when generating evoTiers later on, we only visit a given element once and to give us a way to break out of our while loop.
  const visited = new Array(evoChain.length);
  visited[0] = true;

  // Adds a sprite property to each pokemon in the chain for display
  pokemonSpriteGenerator(evoChain);

  // Performs a forEach on the evochain and calls 2 functions to turn their evo condition strings into something sensible as the raw data is not very usable.
  evoChain.forEach((pokemon) => {
    const evoConditions = pokemon.pokemon_v2_pokemonevolutions;

    if (evoConditions.length) {
      updateEvoCondition(pokemon.pokemon_v2_pokemonevolutions[0]);
      buildEvoCondition(pokemon);
    }
  });

  // Begins building evo tiers. Ex) If a pokemon has 3 stages (charmander, charmelion, charizard) they will be in tier 1, 2, and 3 respecitvely.
  const evoTiers = new Array();

  //pushes the inital pokemon in the chain into it's own tier
  evoTiers.push(new Array(evoChain[0]));

  //prevEvoId will be used to see if the current pokemon in the while loop below had evolved from the previous pokemon
  let prevEvoId = new Array();
  prevEvoId.push(evoChain[0].id);

  // While loop on our evoChain as long as there is a prevEvoId to check pokemon in the evoChain against. When all elements have been visited, prevEvoId will be empty at the end of the cycle and break out.
  while (prevEvoId.length) {
    // Creates an empty array to push pokemon for next evo tier onto and for the next set of ids to check against.
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

    // If we found any pokemon that evolved from the current prevEvoId, push it onto the evoTiers array
    evoTier.length && evoTiers.push(evoTier);

    // If any pokemon were found for the current evoTier, update prevEvoIds to check against them for the next cycle
    prevEvoId = nextIds;
  }

  return evoTiers;
};

// This simply checks all the keys for the evoCondition object and either deletes them if they're null/false, or calls the evoCondition function to update the key's value to something usable.
export const updateEvoCondition = (data) => {
  Object.keys(data).forEach((key) => {
    if (!data[key] && data[key] !== 0) {
      delete data[key];
      return;
    }

    evoConditions(data, key);
  });
};

export const capitalizeFirstLetterEachWord = (string) => {
  const words = string.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};

export const updateItemData = (items) =>
  items.forEach((item) => {
    generateItemCategory(item);
    itemSpriteGenerator(item);
    removeHyphen(item, "name");
  });

//Generic function used to remove hyphens from strings
export const removeHyphen = (obj, key) =>
  (obj[key] = obj[key].replace("-", " "));

export const updateAllMoveText = (data) =>
  Object.keys(data).forEach((moveList) => {
    data[moveList].forEach((move) => {
      const moveEffectChance = move.move_effect_chance;

      move.name = move.name.replace("-", " ");

      if (moveEffectChance != null) {
        const effectTextData =
          move.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0];

        if (effectTextData != null) {
          effectTextData.effect = effectTextData.effect.replaceAll(
            "$effect_chance%",
            `${moveEffectChance}%`
          );
        }
      }
    });
  });

export const splitPokemonAbilties = (data) => {
  console.log("in splitPokemonAbilities", data);
  const splitData = new Array();

  let currentIndex = data[0].name.charAt(0);

  let currentArray = new Array();

  for (let ability of data) {
    if (currentIndex == ability.name.charAt(0)) {
      currentArray.push(ability);
    } else {
      splitData.push(currentArray);
      currentArray = new Array();
      currentArray.push(ability);
      currentIndex = ability.name.charAt(0);
    }
  }

  console.log(splitData);
  return splitData;
};
