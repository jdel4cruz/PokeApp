import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

export const usePokemonWeaknessFetch = (pokemonId) => {
  const [typeData, setTypeData] = useState(null);
  const navigate = useNavigate();

  const fetchPokemonWeakness = async (pokemonId) => {
    try {
      const response = await API.fetchTypeWeakness(pokemonId);

      setTypeData({ ...response });
    } catch (error) {
      console.log("there was an error", error);
      navigate("error");
    }
  };

  useEffect(() => {
    console.log("Fetching pokemon weaknesses from API");
    fetchPokemonWeakness(pokemonId);
  }, []);

  return { typeData };
};
