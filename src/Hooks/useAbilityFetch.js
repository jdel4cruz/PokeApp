import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

export const useAbilityFetch = () => {
  const [abilities, setAbilities] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const fetchAbilites = async () => {
    try {
      const data = await API.fetchAbilities();

      setAbilities(data);
    } catch (error) {
      console.log("There was an error", error);
      navigate("/error");
    }
  };

  useEffect(() => {
    console.log("Fetching data from API");
    fetchAbilites();
  }, []);

  return { abilities, currentIndex, setCurrentIndex };
};
