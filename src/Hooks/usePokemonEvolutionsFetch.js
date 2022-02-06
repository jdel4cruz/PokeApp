import { useState, useEffect } from "react";

//API
import API from "../API";

export const usePokemonEvolutionsFetch = (pokemonId) => {
  const [state, setState] = useState(null);

  const fetchPokemonEvolutions = async (id) => {
    try {
      const evolutions = await API.fetchPokemonEvolutions(id);

      setState(evolutions);
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  useEffect(() => {
    console.log("Fetching evolutions from the API");
    fetchPokemonEvolutions(pokemonId);
  }, []);

  useEffect(() => {
    if (state != null) {
      console.log(state);
    }
  }, [state]);

  return { state };
};
