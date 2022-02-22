import { useState, useEffect } from "react";

//API
import API from "../API";

export const useAbilityFetch = () => {
  const [abilities, setAbilities] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAbilites = async () => {
    try {
      const data = await API.fetchAbilities();

      setAbilities(data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    console.log("Fetching data from API");
    fetchAbilites();
  }, []);

  return { abilities, currentIndex, setCurrentIndex };
};
