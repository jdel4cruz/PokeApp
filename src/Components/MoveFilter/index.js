import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
  CloseButton,
} from "./MoveFilter.styles";

// A bunch of arrays filled with objects that contain the label and value properties for the filter options.
const filterOptions = [
  { value: null, label: "Choose Category" },
  { value: "priority", label: "Priority" },
  { value: "type_id", label: "Type" },
  { value: "move_damage_class_id", label: "Attack Class" },
];

const priorityOptions = [
  { value: null, label: "Choose Category" },
  { value: "1", label: "Has Priority" },
  { value: "0", label: "No Priority" },
];

const typeOptions = [
  { value: null, label: "Choose Type" },
  { value: "1", label: "Normal" },
  { value: "2", label: "Fighting" },
  { value: "3", label: "Flying" },
  { value: "4", label: "Poison" },
  { value: "5", label: "Ground" },
  { value: "6", label: "Rock" },
  { value: "7", label: "Bug" },
  { value: "8", label: "Ghost" },
  { value: "9", label: "Steel" },
  { value: "10", label: "Fire" },
  { value: "11", label: "Water" },
  { value: "12", label: "Grass" },
  { value: "13", label: "Electric" },
  { value: "14", label: "Psychic" },
  { value: "15", label: "Ice" },
  { value: "16", label: "Dragon" },
  { value: "17", label: "Dark" },
  { value: "17", label: "Fairy" },
];

const damageClassOptions = [
  { value: null, label: "Choose Category" },
  { value: "1", label: "Status" },
  { value: "2", label: "Physical" },
  { value: "3", label: "Special" },
];

const sortOptions = [
  { value: "id", label: "Id" },
  { value: "name", label: "Name" },
  { value: "accuracy", label: "Accuracy" },
  { value: "power", label: "Power" },
];

const orderOptions = [
  { value: "asc_nulls_first", label: "Asc" },
  { value: "desc_nulls_last", label: "Desc" },
];

const Filter = ({
  filterSort,
  setFilterSort,
  openFilter,
  setOpenFilter,
  setPage,
}) => {
  const { filter, filterVal, sort, sortVal } = filterSort;

  const optionSelect = (filter) => {
    let option;
    switch (filter) {
      case "priority":
        option = priorityOptions;
        break;
      case "type_id":
        option = typeOptions;
        break;
      case "move_damage_class_id":
        option = damageClassOptions;
        break;
      default:
        option = null;
    }

    return option;
  };

  const subOptions = optionSelect(filter);

  const selectStyles = {
    container: (base) => ({ ...base, width: "7rem" }),
  };

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
                value={
                  filter
                    ? filterOptions[
                        filterOptions
                          .map((option) => option.value)
                          .indexOf(filter)
                      ]
                    : filterOptions[0]
                }
                onChange={(e) => handleChange(e, "filter")}
              />

              <Select
                options={subOptions}
                styles={selectStyles}
                value={
                  filterVal != null
                    ? subOptions[
                        subOptions
                          .map((option) => option.value)
                          .indexOf(filterVal)
                      ]
                    : { value: "", label: "Choose Filter" }
                }
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
                value={
                  sortOptions[
                    sortOptions.map((option) => option.value).indexOf(sort)
                  ]
                }
                onChange={(e) => handleChange(e, "sort")}
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                value={
                  orderOptions[
                    orderOptions.map((option) => option.value).indexOf(sortVal)
                  ]
                }
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
