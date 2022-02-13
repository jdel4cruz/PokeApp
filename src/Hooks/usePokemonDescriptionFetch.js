import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//API
import API from "../API";

//Helper Function
import { pokemonSpriteGenerator } from "../HelperFunctions";

export const usePokemonDescriptionFetch = (pokemonId) => {
  const [state, setState] = useState(null);
  const [stats, setStats] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState(null);
  const [abilities, setAbilities] = useState();
  const [sprite, setSprite] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();

  const fetchPokemonData = async (pokemonId) => {
    try {
      const response = await API.fetchPokemonDescription(pokemonId);
      const { pokemon_v2_pokemon: pokemon } = response.data;
      const types = response.data.pokemon_v2_type;
      console.log(response);

      pokemonSpriteGenerator(pokemon);
      setState({ pokemon, types });
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  useEffect(() => {
    console.log("fetching from API");
    fetchPokemonData(pokemonId);
  }, []);

  useEffect(() => {
    if (state != null) {
      console.log(state);
      setStats(
        state.pokemon[0].pokemon_v2_pokemonstats.map((item) => ({
          base_stat: item.base_stat,
          name: item.pokemon_v2_stat.name,
        }))
      );
      setAbilities(
        state.pokemon[0].pokemon_v2_pokemonabilities.map((item) => ({
          title: `${item.pokemon_v2_ability.name} ${
            item.is_hidden ? "(Hidden)" : ""
          }`,
          key: uuidv4(),

          content:
            item.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect,
        }))
      );
      // setAbilities(
      //   state.pokemon[0].pokemon_v2_pokemonabilities.map((item) => ({
      //     is_hidden: item.is_hidden,
      //     name: item.pokemon_v2_ability.name,
      //     effect:
      //       item.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect,
      //   }))
      // );
      setSprite(state.pokemon[0].sprite);
      setId(state.pokemon[0].id);
      setName(state.pokemon[0].name);

      setPokemonTypes(
        state.pokemon[0].pokemon_v2_pokemontypes.map(
          (item) => state.types[item.type_id - 1].name
        )
      );
    }
  }, [state]);

  return { state, stats, abilities, sprite, id, name, pokemonTypes };
};
