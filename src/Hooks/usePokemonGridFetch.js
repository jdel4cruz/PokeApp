import { useState, useEffect } from "react";

//API
import API from "../API";

//Helper Function
import { pokemonSpriteGenerator, cardGenerator } from "../HelperFunctions";

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
  const [cards, setCards] = useState([]);
  const [filterSort, setFilterSort] = useState({
    filter: initialFilter,
    sort: initialSort,
  });

  const fetchGrid = async () => {
    try {
      const data = await API.fetchPokemonGrid();
      const pokemon = data.pokemon_v2_pokemon;
      pokemonSpriteGenerator(pokemon);
      setRawData(pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFilterSort = (data) => {
    let newData = data;
    const { filtered, typeCriteria, special } = filterSort.filter;
    const { sorted, sortStat, sortId, sortName, statAsc, nameAsc, idAsc } =
      filterSort.sort;

    if (filtered) {
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
            if (!type) {
              return;
            }
            let isType = false;

            dataTypes.forEach((el) => {
              const dataType = el.pokemon_v2_type.name;

              if (dataType == type) {
                isType = true;
              }
            });

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

    if (sorted) {
      newData.sort((a, b) => {
        if (sortStat != null) {
          const { pokemon_v2_pokemonstats: aStats } = a;
          const { pokemon_v2_pokemonstats: bStats } = b;

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

  //initial fetch and card generation
  useEffect(() => {
    console.log("grabbing from api");
    fetchGrid();
  }, []);

  useEffect(() => {
    if (rawData != null) {
      const end = page * limit;
      const start = page * limit - limit;
      const data = applyFilterSort(rawData);

      setCards((prevCards) =>
        page == 1
          ? cardGenerator(data.slice(start, end), filterSort, page, limit)
          : [
              ...prevCards,
              cardGenerator(data.slice(start, end), filterSort, page, limit),
            ]
      );
    }
  }, [rawData, limit, page, filterSort]);

  return { limit, setLimit, page, setPage, cards, filterSort, setFilterSort };
};
