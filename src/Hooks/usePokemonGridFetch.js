import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//API
import API from "../API/API";

//Helper Function
import {
  pokemonSpriteGenerator,
  pokemonCardGenerator,
} from "../HelperFunctions/HelperFunctions";

//If type == true, will filter pokemontypes array against typecriteria, otherwise skip
//If special !="", will filter pokemonspecy object to see if array[special] == true
const initialFilter = {
  filtered: true,
  typeCriteria: { type1: "", type2: "" },
  special: "",
};

//If sort criteria changes, sort will be compared against rawData[sortCriteria]
//Sortstat values(index to stat type) = [hp, atk, def, sp atk, sp def, speed ]
const initialSort = {
  sorted: true,
  sortStat: null,
  sortId: true,
  sortName: false,
  statAsc: true,
  nameAsc: false,
  idAsc: true,
};

export const usePokemonGridFetch = () => {
  const [rawData, setRawData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(54);
  const [rawCards, setRawCards] = useState(null);
  const [cards, setCards] = useState([]);
  const [filterSort, setFilterSort] = useState({
    filter: initialFilter,
    sort: initialSort,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const navigate = useNavigate();

  // Fetches data from API and sets it to rawData
  const fetchGrid = async () => {
    try {
      const data = await API.fetchPokemonGrid();
      const pokemon = data.pokemon_v2_pokemon;
      pokemonSpriteGenerator(pokemon);
      setRawData(pokemon);
    } catch (error) {
      console.log("There was an error", error);
      navigate("/error");
    }
  };

  // Applies filters to rawData before generating cards
  const applyFilterSort = (data) => {
    let newData = data;

    // Pulls filter and sort critera from the filterSort state
    const { filtered, typeCriteria, special } = filterSort.filter;
    const { sorted, sortStat, sortId, sortName, statAsc, nameAsc, idAsc } =
      filterSort.sort;

    if (filtered) {
      newData = data.filter((item) => {
        // If filtering by special pokemon (baby, legendary, mythic), deconstructs special object from pokemon and returns false if obj[special] == false
        if (special) {
          const { pokemonspecy: dataSpecial } = item.props.data;

          if (!dataSpecial[special]) {
            return false;
          }
        }

        //If typeCriteria is set, matches(bool) is set to true
        if (Object.keys(typeCriteria).length) {
          const { pokemontypes: dataTypes } = item.props.data;
          let matches = true;

          // isType(bool) is set to false and forEach is run on the typeCriteria values
          Object.values(typeCriteria).forEach((type) => {
            if (!type) {
              return;
            }

            let isType = false;

            // If a pokemon does matches the given type, isType is set to true
            dataTypes.forEach((el) => {
              const dataType = el.pokemon_v2_type.name;

              if (dataType == type) {
                isType = true;
              }
            });

            // If isType was not set to true during the previous forEach, matches is set to false
            if (!isType) {
              matches = false;
            }
          });

          if (matches == false) {
            return false;
          }
        }

        return true;
      });
    }

    // Sorts pokemon by Stat/Id/Name based on which criteria are set. Due to current implementation, since users can't pick the order in which pokemon are sorted, it goes name > id > stat
    if (sorted) {
      newData.sort((a, b) => {
        if (sortStat != null) {
          const { pokemonstats: aStats } = a.props.data;
          const { pokemonstats: bStats } = b.props.data;

          if (statAsc) {
            return aStats[sortStat].base_stat - bStats[sortStat].base_stat;
          }

          return bStats[sortStat].base_stat - aStats[sortStat].base_stat;
        }

        if (sortId) {
          const { id: aId } = a;
          const { id: bId } = b;
          if (idAsc) {
            return aId - bId;
          }
          return bId - aId;
        }

        if (sortName) {
          const { name: aName } = a;
          const { name: bName } = b;
          if (nameAsc) {
            if (aName.toUpperCase() < bName.toUpperCase()) {
              return -1;
            }
            if (aName.toUpperCase() > bName.toUpperCase()) {
              return 1;
            }
          }

          if (aName.toUpperCase() < bName.toUpperCase()) {
            return 1;
          }
          if (aName.toUpperCase() > bName.toUpperCase()) {
            return -1;
          }
          return 0;
        }
      });
    }
    return newData;
  };

  const applySearch = (data) => {
    let searchData;
    if (searchTerm != "") {
      searchData = data.filter((card) => {
        return card.props.name.includes(searchTerm.toLowerCase());
      });

      return searchData;
    }
    return data;
  };

  //initial fetch and card generation
  useEffect(() => {
    console.log("grabbing from api");
    fetchGrid();
  }, []);

  useEffect(() => {
    if (rawData != null) {
      setRawCards(pokemonCardGenerator(rawData));
    }
  }, [rawData]);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 100);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (rawCards != null) {
      // generates data based on filter/sort criteria that will be used to generate cards
      const data = applySearch(applyFilterSort(rawCards));

      // Start and End variables are used to determine where to slice the data array when generating cards
      const end = page * limit;
      const start = page * limit - limit;

      // If page = 1, generates and sets first group of cards which is based off of limit. For each additional page, an additional group of cards is pushed onto cards
      setCards((prevCards) =>
        page == 1
          ? data.slice(start, end)
          : [...prevCards, data.slice(start, end)]
      );
    }
  }, [rawCards, limit, page, filterSort, searchTerm]);

  return {
    limit,
    setLimit,
    page,
    setPage,
    cards,
    filterSort,
    setFilterSort,
    setDebouncedTerm,
  };
};
