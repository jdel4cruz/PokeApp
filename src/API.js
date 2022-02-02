import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

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

  fetchPokemon: (pokemonId) => P.getPokemonByName(pokemonId),

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
    console.log(pokemonId);

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

    console.log(data);
    console.log(type1);
    console.log(type2);

    return { weakness1, weakness2, type1, type2 };
  },
};

export default apiSettings;
