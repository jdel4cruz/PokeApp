import { useState, useEffect } from "react";

//API
import API from "../API";

//Helper Functions
import { itemCardGenerator } from "../HelperFunctions";

// WIP but will function extremely similarly to usePokemonGridFetch
export const useItemFetch = () => {
  const [state, setState] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(54);
  const [cards, setCards] = useState(null);
  const [popup, setPopup] = useState(null);
  const [filterSort, setFilterSort] = useState(null);

  const fetchItems = async () => {
    try {
      const items = await API.fetchItems();

      setState(items);
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  useEffect(() => {
    console.log("Fetching from API");

    fetchItems();
  }, []);

  useEffect(() => {
    if (state != null) {
      const end = page * limit;
      const start = page * limit - limit;

      setCards((prevCards) =>
        page == 1
          ? itemCardGenerator(
              state.slice(start, end),
              filterSort,
              page,
              limit,
              setPopup
            )
          : [
              ...prevCards,
              itemCardGenerator(
                state.slice(start, end),
                filterSort,
                page,
                limit,
                setPopup
              ),
            ]
      );
    }
  }, [state, limit, page, filterSort]);

  return { popup, setPopup, cards, setFilterSort };
};
