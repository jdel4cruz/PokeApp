import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

export const usePokemonMoveFetch = (pokemonId) => {
  const [movesEvo, setMovesEvo] = useState(null);

  const navigate = useNavigate();

  const fetchMoves = async (pokemonId) => {
    try {
      const response = await API.fetchMoves(pokemonId);

      let hasMoves = false;
      Object.keys(response).forEach((key) => {
        if (response[key].length > 1 && key != "evo") {
          hasMoves = true;
        }
      });

      if (!hasMoves) {
        throw new Error(`Moves missing from API`);
      }

      if (response.evo[0].evoChain.length < 2) {
        response.evo = false;
      } else {
        response.evo = true;
      }

      setMovesEvo(response);
    } catch (error) {
      console.log("There was an error", error);
      navigate("/error");
    }
  };

  useEffect(() => {
    console.log("Fetching pokemon moves from API");
    fetchMoves(pokemonId);
  }, []);

  return { movesEvo };
};
