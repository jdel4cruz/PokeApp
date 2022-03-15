import { useState, useEffect } from "react";

//API
import API from "../API/API";

export const usePokemonWeaknessFetch = (pokemonId) => {
  const [typeData, setTypeData] = useState(null);

  const fetchPokemonWeakness = async (pokemonId) => {
    try {
      const response = await API.fetchTypeWeakness(pokemonId);
      console.log(response);

      setTypeData({ ...response });
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  useEffect(() => {
    console.log("Fetching pokemon weaknesses from API");
    fetchPokemonWeakness(pokemonId);
  }, []);

  return { typeData };
};
