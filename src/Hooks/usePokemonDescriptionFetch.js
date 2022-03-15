import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//API
import API from "../API/API";

//Helper Function
import { pokemonSpriteGenerator } from "../HelperFunctions/HelperFunctions";

export const usePokemonDescriptionFetch = (pokemonId) => {
  const [rawData, setRawData] = useState(null);
  const [stats, setStats] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState(null);
  const [abilities, setAbilities] = useState();
  const [sprite, setSprite] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();

  // Fetches data from API and sets it to rawData
  const fetchPokemonData = async (pokemonId) => {
    try {
      const data = await API.fetchPokemonDescription(pokemonId);
      const { pokemon_v2_pokemon: pokemon, pokemon_v2_type: types } = data;

      pokemonSpriteGenerator(pokemon);
      setRawData({ pokemon, types });
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  // Initial data fetch
  useEffect(() => {
    console.log("fetching from API");
    fetchPokemonData(pokemonId);
  }, []);

  // Sets additional hooks once rawData has been set
  useEffect(() => {
    if (rawData != null) {
      setStats(
        rawData.pokemon[0].pokemon_v2_pokemonstats.map((item) => ({
          base_stat: item.base_stat,
          name: item.pokemon_v2_stat.name,
        }))
      );
      setAbilities(
        rawData.pokemon[0].pokemon_v2_pokemonabilities.map((item) => {
          const effectArray =
            item.pokemon_v2_ability.pokemon_v2_abilityeffecttexts;

          const title = `${item.pokemon_v2_ability.name} ${
            item.is_hidden ? "(Hidden)" : ""
          }`;

          const content =
            effectArray.length > 0
              ? effectArray[0].effect
              : "Not supported by API";

          return {
            title: title,
            key: uuidv4(),

            content: content,
          };
        })
      );

      setSprite(rawData.pokemon[0].sprite);
      setId(rawData.pokemon[0].id);
      setName(rawData.pokemon[0].name);

      setPokemonTypes(
        rawData.pokemon[0].pokemon_v2_pokemontypes.map(
          (item) => rawData.types[item.type_id - 1].name
        )
      );
    }
  }, [rawData]);

  return { rawData, stats, abilities, sprite, id, name, pokemonTypes };
};
