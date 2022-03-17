import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
  CloseButton,
} from "./Filter.styles";

// A bunch of arrays filled with objects that contain the label and value properties for the filter options.
const filterOptions = [
  { value: "", label: "Choose Category" },
  { value: "Consumable", label: "Consumable" },
  { value: "Battle Item", label: "Battle Item" },
  { value: "Held Item", label: "Held Item" },
  { value: "Evolution", label: "Evolution" },
  { value: "Key Item", label: "Key Item" },
  { value: "Sellable", label: "Sellable" },
  { value: "TM", label: "TM" },
];

const sortOptions = [
  { value: "id", label: "Id" },
  { value: "name", label: "Name" },
];

const orderOptions = [
  { value: "asc", label: "Asc" },
  { value: "desc", label: "Desc" },
];

const Filter = ({
  filterSort,
  setFilterSort,
  openFilter,
  setOpenFilter,
  setPage,
}) => {
  const { filter, sort: sortParams } = filterSort;

  const selectStyles = {
    container: (base) => ({ ...base, width: "7rem" }),
  };

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

  const filterVal = filter
    ? filterOptions[filterOptions.map((option) => option.value).indexOf(filter)]
    : filterOptions[0];

  const sortVal =
    sortOptions[
      sortOptions.map((option) => option.value).indexOf(sortParams.criteria)
    ];

  const orderVal =
    orderOptions[
      orderOptions.map((option) => option.value).indexOf(sortParams.order)
    ];

  return (
    <Wrapper className={openFilter ? "open" : ""}>
      <div>
        <Selection>
          <li>
            <h2>Filter Options:</h2>
            <SelectContainer>
              <Select
                options={filterOptions}
                styles={selectStyles}
                value={filterVal}
                onChange={(e) => handleChange(e, "filter")}
              />
            </SelectContainer>
          </li>
        </Selection>
      </div>
      <div>
        <Selection>
          <li>
            <h2>Sort Options:</h2>
            <SelectContainer>
              <Select
                options={sortOptions}
                styles={selectStyles}
                value={sortVal}
                onChange={(e) => handleChange(e, "sortCriteria")}
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                value={orderVal}
                onChange={(e) => handleChange(e, "order")}
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
