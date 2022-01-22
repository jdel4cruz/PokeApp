import { useState, useEffect } from "react";

//API
import API from "../API";

//Helper Function
import { spriteGenerator, cardGenerator } from "../HelperFunctions";

//If type == true, will filter pokemontypes array against typecriteria, otherwise skip
//If special !="", will filter pokemonspecy object to see if array[special] == true
const initialFilter = {
  filtered: true,
  typeCriteria: { type2: "flying" },
  special: "is_legendary",
};

//If sort criteria changes, sort will be compared against state[sortCriteria]
//Sortstat values(index to stat type) = [hp, atk, def, sp atk, sp def, speed ]
const initialSort = {
  sorted: true,
  sortAsc: true,
  sortStat: 5,
  sortId: false,
  sortName: false,
};

export const usePokemonGridFetch = () => {
  const [state, setState] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(54);
  const [cards, setCards] = useState(null);
  const [filterSort, setFilterSort] = useState({
    filter: initialFilter,
    sort: initialSort,
  });

  const fetchGrid = async () => {
    try {
      const response = await API.fetchPokemonGrid();
      const data = response.data.pokemon_v2_pokemon;
      console.log("initial fetch complete");
      await spriteGenerator(data);
      console.log("sprite addition complete");
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFilterSort = (data) => {
    let newData = data;
    const { filtered, typeCriteria, special } = filterSort.filter;
    const { sorted, sortAsc, sortStat, sortId, sortName } = filterSort.sort;

    if (filtered) {
      console.log("filtering");

      newData = data.filter((item) => {
        if (special) {
          const { pokemon_v2_pokemonspecy: dataSpecial } = item;

          if (!dataSpecial[special]) {
            return false;
          }
        }

        if (Object.keys(typeCriteria).length) {
          const { pokemon_v2_pokemontypes: dataTypes } = item;
          let matches = true;

          Object.values(typeCriteria).forEach((type) => {
            let isType = false;

            dataTypes.forEach((el) => {
              const dataType = el.pokemon_v2_type.name;
              console.log(dataType);
              console.log(type);

              if (dataType == type) {
                isType = true;
              }
            });

            if (!isType) {
              console.log(`isType: ` + isType);
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

    if (sorted) {
      console.log(sortStat != null);
      newData.sort((a, b) => {
        if (sortStat != null) {
          const { pokemon_v2_pokemonstats: aStats } = a;
          const { pokemon_v2_pokemonstats: bStats } = b;

          if (sortAsc) {
            return aStats[sortStat].base_stat - bStats[sortStat].base_stat;
          }

          return bStats[sortStat].base_stat - aStats[sortStat].base_stat;
        }

        if (sortName) {
          const { name: aName } = a;
          const { name: bName } = b;
          if (sortAsc) {
            if (aName.toUpperCase() < bName.toUpperCase()) {
              return -1;
            }
            if (aName.toUpperCase() > bName.toUpperCase()) {
              return 1;
            }
            return 0;
          }

          if (aName.toUpperCase() < bName.toUpperCase()) {
            return 1;
          }
          if (aName.toUpperCase() > bName.toUpperCase()) {
            return -1;
          }
          return 0;
        }

        if (sortId) {
          const { id: aId } = a;
          const { id: bId } = b;
          if (sortAsc) {
            return aId - bId;
          }
          return bId - aId;
        }
      });
    }
    console.log(newData);
    return newData;
  };

  //initial fetch and card generation
  useEffect(() => {
    console.log("grabbing from api");
    fetchGrid();
  }, []);

  useEffect(() => {
    if (state != null) {
      console.log(state);
      const end = page * limit;
      const start = page * limit - limit;
      const data = applyFilterSort(state);
      setCards(cardGenerator(data.slice(start, end)));
    }
  }, [state, limit, page]);

  return { state, setLimit, setPage, cards };
};
