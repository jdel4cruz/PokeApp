import { useState, useEffect } from "react";

//API
import API from "../API";

//Helper Function
import { spriteGenerator } from "../HelperFunctions";

const initialState = {};

export const usePokemonGridFetch = () => {
  const [state, setState] = useState(initialState);

  const fetchGrid = async () => {
    const response = await API.fetchPokemonGrid();
    const data = response.data.pokemon_v2_pokemon;
    console.log("initial fetch complete");
    await spriteGenerator(data);
    console.log("sprite addition complete");
    setState(data);
  };

  //initial fetch
  useEffect(() => {
    console.log("grabbing from api");
    fetchGrid();
  }, []);

  return { state };
};
