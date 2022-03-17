import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

export const usePokemonEvolutionsFetch = (pokemonId) => {
  const [state, setState] = useState(null);
  const navigate = useNavigate();

  const fetchPokemonEvolutions = async (id) => {
    try {
      const evolutions = await API.fetchPokemonEvolutions(id);

      setState(evolutions);
    } catch (error) {
      console.log("there was an error", error);
      navigate("/error");
    }
  };

  useEffect(() => {
    console.log("Fetching evolutions from the API");
    fetchPokemonEvolutions(pokemonId);
  }, []);

  return { state };
};
