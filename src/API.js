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
          query PokemonGrid {
            pokemon_v2_pokemon {
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
            }
          }
          `,
      }),
    });

    const data = await response.json();

    return data;
  },
};

export default apiSettings;
