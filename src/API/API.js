//Consts
import {
  fetchData,
  pokemonGridQuery,
  pokemonDescriptionQuery,
  typeQuery,
  weaknessQuery,
  itemsQuery,
  pokemonMovesQuery,
  evoQuery,
  allAbilitiesQuery,
} from "./constants";

//Helper Functions
import {
  updateMoveText,
  generateEvoTiers,
  updateItemData,
  updateAllMoveText,
  splitPokemonAbilties,
} from "../HelperFunctions/HelperFunctions";

const apiSettings = {
  fetchPokemonGrid: async () => {
    return await fetchData(pokemonGridQuery);
  },

  fetchPokemonDescription: async (pokemonId) => {
    const query = pokemonDescriptionQuery;
    const vars = {
      id: pokemonId,
    };

    return await fetchData(query, vars);
  },

  fetchTypeWeakness: async (pokemonId) => {
    // Query and variables to obtain Pokemon type via Pokemon ID
    const tQuery = typeQuery;

    const typeVars = {
      id: pokemonId,
    };

    const typeData = await fetchData(tQuery, typeVars);

    // Query and variables to obtain Pokemon weakness values based on Pokemon Type
    const type1 = typeData.pokemon_v2_pokemontype[0].pokemon_v2_type.name;
    const type2 =
      typeData.pokemon_v2_pokemontype.length > 1
        ? typeData.pokemon_v2_pokemontype[1].pokemon_v2_type.name
        : "";

    const wQuery = weaknessQuery;

    const weaknessVars = {
      type1,
      type2,
    };

    const weaknessData = await fetchData(wQuery, weaknessVars);

    const weakness1 = weaknessData.weakness1;
    const weakness2 = weaknessData.weakness2;

    return { weakness1, weakness2, type1, type2 };
  },

  fetchMoves: async (pokemonId) => {
    const query = pokemonMovesQuery;

    const vars = {
      id: pokemonId,
    };

    const data = await fetchData(query, vars);

    updateMoveText(data);

    return data;
  },

  fetchPokemonEvolutions: async (pokemonId) => {
    const query = evoQuery;

    const vars = {
      id: pokemonId,
    };

    const rawData = await fetchData(query, vars);

    // Pulling Pokemon Evolution array from raw data. If array length is greater than 1, the individual pokemon in the array will be sectioned into evo tiers
    const {
      pokemon_v2_evolutionchain: [{ pokemon_v2_pokemonspecies: data }],
    } = rawData;

    if (data.length > 1) {
      const evoTiers = generateEvoTiers(data);

      return evoTiers;
    }

    const evoTiers = new Array();
    evoTiers.push(data);
    return evoTiers;
  },

  fetchItems: async () => {
    const query = itemsQuery;

    const data = await fetchData(query);
    const items = data.items;

    updateItemData(items);
    return items;
  },

  fetchAllMoves: async (filter, filterCondition, filterVal, sort, sortVal) => {
    let query;
    if (filterVal == null) {
      query = `query AllMoves {
        moves: pokemon_v2_move (order_by: {${sort}: ${sortVal}}) {
          accuracy
          move_damage_class_id
          move_effect_chance
          name
          power
          pp
          priority
          type_id
          id
          pokemon_v2_moveeffect {
            pokemon_v2_moveeffecteffecttexts {
              effect
            }
          }
        }
      }
      `;
    } else {
      query = `
      query AllMoves {
        moves: pokemon_v2_move(where: {${filter}: {${filterCondition} ${filterVal}}}, order_by: {${sort}: ${sortVal}}) {
          accuracy
          move_damage_class_id
          move_effect_chance
          name
          power
          pp
          priority
          type_id
          id
          pokemon_v2_moveeffect {
            pokemon_v2_moveeffecteffecttexts {
              effect
            }
          }
        }
      }
    
    `;
    }

    const data = await fetchData(query);
    updateAllMoveText(data);

    return data;
  },

  fetchAbilities: async () => {
    const query = allAbilitiesQuery;

    const data = await fetchData(query);
    const splitData = splitPokemonAbilties(data.abilities);

    return splitData;
  },
};

export default apiSettings;
