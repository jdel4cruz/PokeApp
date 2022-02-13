//Helper Functions
import {
  updateMoveText,
  generateEvoTiers,
  itemSpriteGenerator,
} from "./HelperFunctions";

// fetchData = async (queryString, vars = {}) => {
//   const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

//   const response = await fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `${queryString}`,
//       variables: vars,
//     }),
//   });

//   const data = await response.json();

//   return data;
// },

const apiSettings = {
  fetchPokemonGrid: async () => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query PokemonGrid  {
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
          `,
      }),
    });

    const data = await response.json();

    return data;
  },

  fetchPokemonDescription: async (pokemonId) => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query PokemonDescription($id: Int) {
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
        }
          `,
        variables: {
          id: pokemonId,
        },
      }),
    });

    const data = await response.json();

    return data;
  },

  fetchTypeWeakness: async (pokemonId) => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const fetchTypes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query PokemonType($id: Int) {
          pokemon_v2_pokemontype(where: {pokemon_id: {_eq: $id}}) {
            pokemon_v2_type {
              name
            }
          }
        }`,
        variables: {
          id: pokemonId,
        },
      }),
    });

    const types = await fetchTypes.json();

    const type1 = types.data.pokemon_v2_pokemontype[0].pokemon_v2_type.name;
    const type2 =
      types.data.pokemon_v2_pokemontype.length > 1
        ? types.data.pokemon_v2_pokemontype[1].pokemon_v2_type.name
        : "";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` fragment typeWeaknessFields on pokemon_v2_typeefficacy {
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
        }`,
        variables: {
          type1: `${type1}`,
          type2: `${type2}`,
        },
      }),
    });

    const data = await response.json();
    const weakness1 = data.data.weakness1;
    const weakness2 = data.data.weakness2;

    return { weakness1, weakness2, type1, type2 };
  },

  fetchMoves: async (pokemonId) => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
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
        
        query PokemonLevelMoves($pokemonId: Int) {
          levelMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $pokemonId}, move_learn_method_id: {_eq: 1}, version_group_id: {_eq: 18}}, order_by: {level: asc}) {
            ...PokemonMoveFields
          }
          eggMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $pokemonId}, move_learn_method_id: {_eq: 2}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
            ...PokemonMoveFields
          }
          tutorMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $pokemonId}, move_learn_method_id: {_eq: 3}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
            ...PokemonMoveFields
          }
          machineMoves: pokemon_v2_pokemonmove(where: {pokemon_id: {_eq: $pokemonId}, move_learn_method_id: {_eq: 4}, version_group_id: {_eq: 18}}, order_by: {pokemon_v2_move: {name: asc}}) {
            ...PokemonMoveFields
          }
        }`,
        variables: {
          pokemonId: pokemonId,
        },
      }),
    });

    const toJson = await response.json();
    const { data } = toJson;
    console.log(data);
    updateMoveText(data);
    console.log(data);

    return data;
  },

  fetchPokemonEvolutions: async (pokemonId) => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query PokemonEvolution($id: [Int!]) {
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
        `,
        variables: {
          id: pokemonId,
        },
      }),
    });

    const toJson = await response.json();

    const {
      data: {
        pokemon_v2_evolutionchain: [{ pokemon_v2_pokemonspecies: data }],
      },
    } = toJson;

    if (data.length > 1) {
      const evoTiers = generateEvoTiers(data);

      return evoTiers;
    }

    const evoTiers = new Array();
    evoTiers.push(data);
    return evoTiers;
  },

  fetchItems: async () => {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query PokemonItems {
          items: pokemon_v2_item {
            name
            id
            cost
            itemEffect:pokemon_v2_itemeffecttexts {
              effect
            }
          }
        }
          `,
      }),
    });

    const toJson = await response.json();
    const items = toJson.data.items;

    itemSpriteGenerator(items);

    return items;
  },
};

export default apiSettings;
