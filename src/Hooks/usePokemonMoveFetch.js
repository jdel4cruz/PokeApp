import { useState, useEffect } from "react";

//API
import API from "../API";

export const usePokemonMoveFetch = (pokemonId) => {
  const [moves, setMoves] = useState(null);

  const fetchMoves = async (pokemonId) => {
    try {
      const response = await API.fetchMoves(pokemonId);

      setMoves(response);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    console.log("Fetching pokemon moves from API");
    fetchMoves(pokemonId);
  }, []);

  return { moves };
};
