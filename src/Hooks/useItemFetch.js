import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

//Helper Functions
import { itemCardGenerator } from "../HelperFunctions/HelperFunctions";

const initialFilterSort = {
  filter: "Battle Item",
  sort: {
    criteria: "id",
    order: "asc",
  },
};

// WIP but will function extremely similarly to usePokemonGridFetch
export const useItemFetch = () => {
  const [rawData, setRawData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(60);
  const [rawCards, setRawCards] = useState(null);
  const [cards, setCards] = useState(null);
  const [popup, setPopup] = useState(null);
  const [filterSort, setFilterSort] = useState(initialFilterSort);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const items = await API.fetchItems();

      setRawData(items);
    } catch (error) {
      console.log("there was an error", error);
      navigate("/error");
    }
  };

  const applyFilterSort = (data) => {
    let newData = data;

    const { filter, sort: sortParams } = filterSort;

    if (filter) {
      newData = data.filter((item) => filter == item.props.category);
    }

    newData.sort((a, b) => {
      if (sortParams.criteria == "id") {
        const { id: aId } = a.props;
        const { id: bId } = b.props;
        if (sortParams.order == "asc") {
          return aId - bId;
        }

        return bId - aId;
      }
      if (sortParams.criteria == "name") {
        const { name: aName } = a.props;
        const { name: bName } = b.props;
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

  useEffect(() => {
    console.log("Fetching from API");

    fetchItems();
  }, []);

  useEffect(() => {
    if (rawData != null) {
      setRawCards(itemCardGenerator(rawData, setPopup));
    }
  }, [rawData]);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 100);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (rawCards != null) {
      const data = applySearch(applyFilterSort(rawCards));
      const end = page * limit;
      const start = page * limit - limit;

      setCards((prevCards) =>
        page == 1
          ? data.slice(start, end)
          : [...prevCards, data.slice(start, end)]
      );
    }
  }, [rawCards, limit, page, filterSort, searchTerm]);

  return {
    popup,
    setPopup,
    cards,
    filterSort,
    setFilterSort,
    setPage,
    setDebouncedTerm,
  };
};
