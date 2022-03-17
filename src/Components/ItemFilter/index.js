import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
  CloseButton,
} from "./Filter.styles";

//Constants
import {
  filterOptions,
  sortOptions,
  orderOptions,
  selectStyles,
  filterVal,
  sortVal,
  orderVal,
} from "./constants";

const Filter = ({
  filterSort,
  setFilterSort,
  openFilter,
  setOpenFilter,
  setPage,
}) => {
  const { filter, sort: sortParams } = filterSort;

  // Function that is called when a filter or sort option is changed. Takes changes and passes them to setFilterSort to update the state
  const handleChange = (event, key) => {
    let newFilterSort = { ...filterSort };
    let value = event.value;

    if (key == "filter") {
      newFilterSort.filter = value;
    }

    if (key === "sortCriteria") {
      newFilterSort.sort.criteria = value;
    }

    if (key === "order") {
      newFilterSort.sort.order = value;
    }

    setPage(1);
    return setFilterSort(newFilterSort);
  };

  // Called when close filter button is click. Simply calls setOpenFilter and is passed false to close the filter window.
  const closeFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Wrapper className={openFilter ? "open" : ""}>
      <Selection>
        <li>
          <h2>Filter Options:</h2>
          <Select
            options={filterOptions}
            styles={selectStyles}
            value={filterVal(filter)}
            onChange={(e) => handleChange(e, "filter")}
          />
        </li>
        <li>
          <h2>Sort Options:</h2>
          <SelectContainer>
            <Select
              options={sortOptions}
              styles={selectStyles}
              value={sortVal(sortParams)}
              onChange={(e) => handleChange(e, "sortCriteria")}
            />
            <Select
              options={orderOptions}
              styles={selectStyles}
              value={orderVal(sortParams)}
              onChange={(e) => handleChange(e, "order")}
            />
          </SelectContainer>
        </li>
      </Selection>
      <CloseButton type="button" onClick={() => closeFilter()}>
        Close
      </CloseButton>
    </Wrapper>
  );
};

export default Filter;
