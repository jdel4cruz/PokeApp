import { useState, useEffect } from "react";

//API
import API from "../API";

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
      // console.log(moves);

      setRawData(moves);
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  useEffect(async () => {
    console.log("fetching from API");
    await fetchAllMoves();
  }, [filterSort, page, limit]);

  return { rawData, setPage, setLimit, filterSort, setFilterSort };
};
