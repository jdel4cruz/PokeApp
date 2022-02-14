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
  { value: "", label: "Choose Type" },
  { value: "normal", label: "Normal" },
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
  { value: "grass", label: "Grass" },
  { value: "electric", label: "Electric" },
  { value: "ice", label: "Ice" },
  { value: "fighting", label: "Fighting" },
  { value: "ground", label: "Ground" },
  { value: "flying", label: "Flying" },
  { value: "psychic", label: "Psychic" },
  { value: "bug", label: "Bug" },
  { value: "rock", label: "Rock" },
  { value: "ghost", label: "Ghost" },
  { value: "dark", label: "Dark" },
  { value: "dragon", label: "Dragon" },
  { value: "steel", label: "Steel" },
  { value: "fairy", label: "Fairy" },
];

const categoryOptions = [
  {
    value: "",
    label: "Choose Category",
  },
  {
    value: "is_legendary",
    label: "Legendary",
  },
  {
    value: "is_mythical",
    label: "Mythical",
  },
  {
    value: "is_baby",
    label: "Baby",
  },
];

const orderOptions = [
  { value: true, label: "Asc" },
  { value: false, label: "Desc" },
];

const idNameOptions = [
  { value: { isOn: false, order: false }, label: "Asc/Desc" },
  { value: { isOn: true, order: true }, label: "Asc" },
  { value: { isOn: true, order: false }, label: "Desc" },
];

const statOptions = [
  { value: null, label: "Choose stat" },
  { value: 0, label: "Hp" },
  { value: 1, label: "Atk" },
  { value: 2, label: "Def" },
  { value: 3, label: "Sp. Atk" },
  { value: 4, label: "Sp.Def" },
  { value: 5, label: "Speed" },
];

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

  const selectStyles = {
    container: (base) => ({ ...base, width: "7rem" }),
  };

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
                value={
                  selectedTypes.length
                    ? filterOptions[
                        filterOptions
                          .map((option) => option.value)
                          .indexOf(selectedTypes[0])
                      ]
                    : filterOptions[0]
                }
                onChange={(e) => handleChange(e, "type1")}
              />

              <Select
                options={filterOptions}
                styles={selectStyles}
                value={
                  selectedTypes.length > 1
                    ? filterOptions[
                        filterOptions
                          .map((option) => option.value)
                          .indexOf(selectedTypes[1])
                      ]
                    : ""
                }
                onChange={(e) => handleChange(e, "type2")}
              />
            </SelectContainer>
          </li>
          <li>
            <h2>Category</h2>
            <Select
              options={categoryOptions}
              styles={selectStyles}
              value={
                category == "is_legendary"
                  ? categoryOptions[1]
                  : category == "is_mythical"
                  ? categoryOptions[2]
                  : category == "is_baby"
                  ? categoryOptions[3]
                  : categoryOptions[0]
              }
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
                value={
                  sortStat != null
                    ? statOptions[
                        statOptions.map((stat) => stat.value).indexOf(sortStat)
                      ]
                    : statOptions[0]
                }
                onChange={(e) => handleChange(e, "stat")}
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                value={
                  sortStat != null
                    ? orderOptions[
                        orderOptions
                          .map((option) => option.value)
                          .indexOf(statAsc)
                      ]
                    : orderOptions[0]
                }
                onChange={(e) => handleChange(e, "order")}
              />
            </SelectContainer>
          </li>
          <li>
            <h2>Id:</h2>
            <Select
              options={idNameOptions}
              styles={selectStyles}
              value={
                sortId && idAsc
                  ? idNameOptions[1]
                  : sortId && !idAsc
                  ? idNameOptions[2]
                  : idNameOptions[0]
              }
              onChange={(e) => handleChange(e, "id")}
            />
          </li>

          <li>
            <h2>Name:</h2>
            <Select
              options={idNameOptions}
              styles={selectStyles}
              value={
                sortName && nameAsc
                  ? idNameOptions[1]
                  : sortName && !nameAsc
                  ? idNameOptions[2]
                  : idNameOptions[0]
              }
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
