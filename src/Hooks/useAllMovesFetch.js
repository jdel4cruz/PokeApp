import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//API
import API from "../API/API";

const initialFilterSort = {
  filter: null,
  filterCondition: null,
  filterVal: null,
  sort: "id",
  sortVal: "asc_nulls_first",
};

//Might take out limit and page states if they're not needed
export const useAllMovesFetch = () => {
  const [rawData, setRawData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(54);
  const [filterSort, setFilterSort] = useState(initialFilterSort);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const navigate = useNavigate();

  const fetchAllMoves = async () => {
    const { filter, filterCondition, filterVal, sort, sortVal } = filterSort;
    try {
      const moves = await API.fetchAllMoves(
        filter,
        filterCondition,
        filterVal,
        sort,
        sortVal
      );

      setRawData(applySearch(moves));
    } catch (error) {
      console.log("there was an error", error);
      navigate("/error");
    }
  };

  const applySearch = (data) => {
    if (searchTerm != "") {
      data.moves = data.moves.filter((move) => {
        return move.name.includes(searchTerm.toLowerCase());
      });
    }

    return data;
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 100);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(async () => {
    console.log("fetching from API");
    await fetchAllMoves();
  }, [filterSort, page, limit, searchTerm]);

  return {
    rawData,
    setPage,
    setLimit,
    filterSort,
    setFilterSort,
    setDebouncedTerm,
  };
};
