import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

export const usePokemonMoveFetch = (pokemonId) => {
  const [moves, setMoves] = useState(null);
  const navigate = useNavigate();

  const fetchMoves = async (pokemonId) => {
    try {
      const response = await API.fetchMoves(pokemonId);
      console.log(response);

      let hasMoves = false;
      Object.keys(response).forEach((key) => {
        if (response[key].length > 1) {
          hasMoves = true;
        }
      });

      if (!hasMoves) {
        throw new Error(`Moves missing from API`);
      }

      setMoves(response);
    } catch (error) {
      console.log("There was an error", error);
      navigate("/error");
    }
  };

  useEffect(() => {
    console.log("Fetching pokemon moves from API");
    fetchMoves(pokemonId);
  }, []);

  return { moves };
};
