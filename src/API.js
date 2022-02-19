//Helper Functions
import {
  updateMoveText,
  generateEvoTiers,
  updateItemData,
  updateAllMoveText,
} from "./HelperFunctions";

const fetchData = async (queryString, vars = {}) => {
  const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: queryString,
      variables: vars,
    }),
  });

  const toJson = await response.json();
  const data = toJson.data;

  console.log(data);

  return data;
};

const apiSettings = {
  fetchPokemonGrid: async () => {
    const query = `query PokemonGrid  {
      pokemon_v2_pokemon (order_by: {id: asc}) {
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        name
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonspecy {
          is_baby
          is_legendary
          is_mythical
        }
      }
    }
    `;
    return await fetchData(query);
  },

  fetchPokemonDescription: async (pokemonId) => {
    const query = `query PokemonDescription($id: Int) {
      pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
        name
        id
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
            id
          }
          base_stat
        }
        pokemon_v2_pokemontypes {
          type_id
        }
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
            pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
              effect
            }
          }
          is_hidden
        }
      }
      pokemon_v2_type (limit: 18){
        id
        name
      }
    }`;
    const vars = {
      id: pokemonId,
    };

    return await fetchData(query, vars);
  },

  fetchTypeWeakness: async (pokemonId) => {
    // Query and variables to obtain Pokemon type via Pokemon ID
    const typeQuery = `
query PokemonType($id: Int) {
  pokemon_v2_pokemontype(where: {pokemon_id: {_eq: $id}}) {
    pokemon_v2_type {
      name
    }
  }
    }`;
    const typeVars = {
      id: pokemonId,
    };

    const typeData = await fetchData(typeQuery, typeVars);

    // Query and variables to obtain Pokemon weakness values based on Pokemon Type
    const type1 = typeData.pokemon_v2_pokemontype[0].pokemon_v2_type.name;
    const type2 =
      typeData.pokemon_v2_pokemontype.length > 1
        ? typeData.pokemon_v2_pokemontype[1].pokemon_v2_type.name
        : "";

    const weaknessQuery = ` fragment typeWeaknessFields on pokemon_v2_typeefficacy {
      damage_factor
      pokemon_v2_type {
        name
      }
      pokemonV2TypeByTargetTypeId {
        name
      }
    }
    query TypeWeaknesses($type1: String = "", $type2: String = "") {
      weakness1: pokemon_v2_typeefficacy(where: {pokemonV2TypeByTargetTypeId: {name: {_eq: $type1}}}) {
        ...typeWeaknessFields
      }
      weakness2: pokemon_v2_typeefficacy(where: {pokemonV2TypeByTargetTypeId: {name: {_eq: $type2}}}) {
        ...typeWeaknessFields
      }
    }`;

    const weaknessVars = {
      type1,
      type2,
    };

    const weaknessData = await fetchData(weaknessQuery, weaknessVars);

    const weakness1 = weaknessData.weakness1;
    const weakness2 = weaknessData.weakness2;

    return { weakness1, weakness2, type1, type2 };
  },

  fetchMoves: async (pokemonId) => {
    const query = `
    fragment PokemonMoveFields on pokemon_v2_pokemonmove {
      level
      pokemon_v2_move {
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
    
    query PokemonLevelMoves($id: Int) {
      levelMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $id}, move_learn_method_id: {_eq: 1}, version_group_id: {_eq: 18}}, order_by: {level: asc}) {
        ...PokemonMoveFields
      }
      eggMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $id}, move_learn_method_id: {_eq: 2}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
        ...PokemonMoveFields
      }
      tutorMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $id}, move_learn_method_id: {_eq: 3}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
        ...PokemonMoveFields
      }
      machineMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $id}, move_learn_method_id: {_eq: 4}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
        ...PokemonMoveFields
      }
    }`;

    const vars = {
      id: pokemonId,
    };

    const data = await fetchData(query, vars);

    updateMoveText(data);

    return data;
  },

  fetchPokemonEvolutions: async (pokemonId) => {
    const query = `query PokemonEvolution($id: [Int!]) {
      pokemon_v2_evolutionchain(where: {pokemon_v2_pokemonspecies: {id: {_in: $id}}}) {
        pokemon_v2_pokemonspecies(order_by: {evolves_from_species_id: asc_nulls_first}) {
          id
          name
          evolves_from_species_id
          pokemon_v2_pokemonevolutions(limit: 1, order_by: {id: desc}) {
            evoTrigger:pokemon_v2_evolutiontrigger {
              name
            }
            useItem:pokemon_v2_item {
              name
            }
            location:pokemon_v2_location {
              name
            }
            heldItem:pokemonV2ItemByHeldItemId {
              name
            }
            gender:pokemon_v2_gender {
              name
            }
            learnedMove:pokemon_v2_move {
              name
            }
            tradeWith:pokemonV2PokemonspecyByTradeSpeciesId {
              name
            }
            moveType:pokemon_v2_type {
              name
            }
            affection: min_affection
            beauty: min_beauty
            happiness: min_happiness
            level: min_level
            needsRain:needs_overworld_rain
            time:time_of_day
            atkIsGreater:relative_physical_stats
            turnUpsideDown:turn_upside_down
          }
        }
      }
    }
    `;
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
    const query = `
    query PokemonItems {
      items: pokemon_v2_item(order_by: {id: asc}) {
        name
        id
        cost
        itemEffect: pokemon_v2_itemeffecttexts {
          effect
        }
        attributes: pokemon_v2_itemattributemaps(order_by: {item_attribute_id: desc}) {
          attribute: pokemon_v2_itemattribute {
            name
            id
          }
        }
        rawCategory: pokemon_v2_itemcategory {
          name
          id
        }
      }
    }
      `;

    const data = await fetchData(query);
    const items = data.items;

    updateItemData(items);
    return items;
  },

  fetchAllMoves: async (filter, filterCondition, filterVal, sort, sortVal) => {
    let query;
    if (filter == null) {
      query = `query AllMoves {
        moves: pokemon_v2_move {
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

    console.log(query);

    const data = await fetchData(query);
    updateAllMoveText(data);
    console.log(data);

    return data;
  },
};

export default apiSettings;
