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
  categoryOptions,
  orderOptions,
  idNameOptions,
  statOptions,
  selectStyles,
  typeVal_1,
  typeVal_2,
  categoryVal,
  statVal,
  statOrderVal,
  idVal,
  nameVal,
} from "./constants";

const Filter = ({
  filterSort,
  setFilterSort,
  openFilter,
  setOpenFilter,
  setPage,
}) => {
  const filters = filterSort.filter;
  const selectedTypes = Object.values(filters.typeCriteria);
  const category = filters.special;

  const sorts = filterSort.sort;
  const { sortStat, statAsc, sortId, sortName, idAsc, nameAsc } = sorts;

  // Function that is called when a filter or sort option is changed. Takes changes and passes them to setFilterSort to update the state
  const handleChange = (event, key) => {
    let newFilterSort = { ...filterSort };
    let value = event.value;

    if (key === "type1") {
      newFilterSort.filter.typeCriteria.type1 = value;
    }

    if (key === "type2") {
      newFilterSort.filter.typeCriteria.type2 = value;
    }

    if (key === "category") {
      newFilterSort.filter.special = value;
    }

    if (key === "order") {
      newFilterSort.sort.statAsc = value;
    }

    if (key === "stat") {
      newFilterSort.sort.sortStat = value;
    }

    if (key === "id") {
      newFilterSort.sort.sortId = value.isOn;
      newFilterSort.sort.idAsc = value.order;
    }

    if (key === "name") {
      newFilterSort.sort.sortName = value.isOn;
      newFilterSort.sort.nameAsc = value.order;
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
      <div>
        <SelectionTitle>Filter:</SelectionTitle>
        <Selection>
          <li>
            <h2>Type Selection</h2>
            <SelectContainer>
              <Select
                options={filterOptions}
                styles={selectStyles}
                value={typeVal_1(selectedTypes)}
                onChange={(e) => handleChange(e, "type1")}
              />
              <Select
                options={filterOptions}
                styles={selectStyles}
                value={typeVal_2(selectedTypes)}
                onChange={(e) => handleChange(e, "type2")}
              />
            </SelectContainer>
          </li>
          <li>
            <h2>Category</h2>
            <Select
              options={categoryOptions}
              styles={selectStyles}
              value={categoryVal(category)}
              onChange={(e) => handleChange(e, "category")}
            />
          </li>
        </Selection>
      </div>
      <div>
        <SelectionTitle>Sort by:</SelectionTitle>
        <Selection>
          <li>
            <h2>Stat:</h2>
            <SelectContainer>
              <Select
                options={statOptions}
                styles={selectStyles}
                value={statVal(sortStat)}
                onChange={(e) => handleChange(e, "stat")}
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                value={statOrderVal(sortStat, statAsc)}
                onChange={(e) => handleChange(e, "order")}
              />
            </SelectContainer>
          </li>
          <li>
            <h2>Id:</h2>
            <Select
              options={idNameOptions}
              styles={selectStyles}
              value={idVal(sortId, idAsc)}
              onChange={(e) => handleChange(e, "id")}
            />
          </li>
          <li>
            <h2>Name:</h2>
            <Select
              options={idNameOptions}
              styles={selectStyles}
              value={nameVal(sortName, nameAsc)}
              onChange={(e) => handleChange(e, "name")}
            />
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
