export const fetchData = async (queryString, vars = {}) => {
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

export const pokemonGridQuery = `query PokemonGrid  {
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

export const pokemonDescriptionQuery = `query PokemonDescription($id: Int) {
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

export const typeQuery = `query PokemonType($id: Int) {
    pokemon_v2_pokemontype(where: {pokemon_id: {_eq: $id}}) {
      pokemon_v2_type {
        name
      }
    }
      }`;
