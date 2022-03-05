import { useState, useEffect } from "react";

//API
import API from "../API";

//Helper Functions
import { itemCardGenerator } from "../HelperFunctions";

const initialFilterSort = {
  filter: "Battle Item",
  sort: {
    criteria: "id",
    order: "asc",
  },
};

// WIP but will function extremely similarly to usePokemonGridFetch
export const useItemFetch = () => {
  const [state, setState] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(54);
  const [cards, setCards] = useState(null);
  const [popup, setPopup] = useState(null);
  const [filterSort, setFilterSort] = useState(initialFilterSort);

  const fetchItems = async () => {
    try {
      const items = await API.fetchItems();

      setState(items);
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  const applyFilterSort = (data) => {
    let newData = data;

    const { filter, sort: sortParams } = filterSort;

    console.log("Filter", filter);
    console.log("SortParams", sortParams);

    if (filter) {
      console.log(`Filtering by ${filter}`);
      newData = data.filter((item) => filter == item.category);
    }

    newData.sort((a, b) => {
      if (sortParams.criteria == "id") {
        const { id: aId } = a;
        const { id: bId } = b;
        if (sortParams.order == "asc") {
          return aId - bId;
        }

        return bId - aId;
      }
      if (sortParams.criteria == "name") {
        const { name: aName } = a;
        const { name: bName } = b;
        if (sortParams.order == "asc") {
          if (aName.toUpperCase() <= bName.toUpperCase()) {
            return -1;
          }
          return 1;
        }

        if (aName.toUpperCase() >= bName.toUpperCase()) {
          return -1;
        }

        return 1;
      }
    });

    return newData;
  };

  useEffect(() => {
    console.log("Fetching from API");

    fetchItems();
  }, []);

  useEffect(() => {
    if (state != null) {
      const end = page * limit;
      const start = page * limit - limit;

      console.log("state", state);
      const data = applyFilterSort(state);
      console.log("data", data);

      setCards((prevCards) =>
        page == 1
          ? itemCardGenerator(
              data.slice(start, end),
              filterSort,
              page,
              limit,
              setPopup
            )
          : [
              ...prevCards,
              itemCardGenerator(
                data.slice(start, end),
                filterSort,
                page,
                limit,
                setPopup
              ),
            ]
      );
    }
  }, [state, limit, page, filterSort]);

  return { popup, setPopup, cards, filterSort, setFilterSort, setPage };
};
