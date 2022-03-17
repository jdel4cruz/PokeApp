import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
  CloseButton,
} from "./MoveFilter.styles";

//Constants
import {
  filterOptions,
  priorityOptions,
  sortOptions,
  orderOptions,
  optionSelect,
  selectStyles,
  filterOptionsVal,
  subOptionsVal,
  sortOptionVal,
  orderOptionVal,
} from "./constants";

const Filter = ({
  filterSort,
  setFilterSort,
  openFilter,
  setOpenFilter,
  setPage,
}) => {
  const { filter, filterVal, sort, sortVal } = filterSort;

  const subOptions = optionSelect(filter);

  // Function that is called when a filter or sort option is changed. Takes changes and passes them to setFilterSort to update the state
  const handleChange = (event, key) => {
    let newFilterSort = { ...filterSort };
    let value = event.value;

    if (key == "filter") {
      newFilterSort.filter = value;
      newFilterSort.filterVal = null;
      newFilterSort.filterCondition = null;
    }

    if (key == "filterVal") {
      if (subOptions == priorityOptions && filterSort.filter > 0) {
        newFilterSort.filterCondition = "_gte:";
      } else {
        newFilterSort.filterCondition = "_eq:";
      }
      newFilterSort.filterVal = value;
    }

    if (key == "sort") {
      newFilterSort.sort = value;
    }

    if (key == "sortVal") {
      newFilterSort.sortVal = value;
    }

    setPage(1);
    setFilterSort(newFilterSort);
  };

  // Called when close filter button is click. Simply calls setOpenFilter and is passed false to close the filter window.
  const closeFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Wrapper className={openFilter ? "open" : ""}>
      <div>
        <SelectionTitle>Filter:</SelectionTitle>
        <Selection>
          <li>
            <h2>Filter Selection</h2>
            <SelectContainer>
              <Select
                options={filterOptions}
                styles={selectStyles}
                value={filterOptionsVal(filter)}
                onChange={(e) => handleChange(e, "filter")}
              />
              <Select
                options={subOptions}
                styles={selectStyles}
                value={subOptionsVal(subOptions, filterVal)}
                onChange={(e) => handleChange(e, "filterVal")}
              />
            </SelectContainer>
          </li>
        </Selection>
      </div>
      <div>
        <SelectionTitle>Sort by:</SelectionTitle>
        <Selection>
          <li>
            <h2>Sort Options:</h2>
            <SelectContainer>
              <Select
                options={sortOptions}
                styles={selectStyles}
                value={sortOptionVal(sort)}
                onChange={(e) => handleChange(e, "sort")}
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                value={orderOptionVal(sortVal)}
                onChange={(e) => handleChange(e, "sortVal")}
              />
            </SelectContainer>
          </li>
        </Selection>
      </div>
      <CloseButton type="button" onClick={() => closeFilter()}>
        Close
      </CloseButton>
    </Wrapper>
  );
};

export default Filter;
