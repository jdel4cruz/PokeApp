import { useState } from "react";
import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
  CloseButton,
} from "./Filter.styles";

// class FilterFields {
//   static Type1 = new FilterFields("type1");
//   static Type2 = new FilterFields("type2");
//   static Category = new FilterFields("category");

//   constructor(name) {
//     this.name = name;
//   }
// }

// class SortFields {
//   static Stat = new SortFields("stat");
//   static Order = new SortFields("order");
//   static Id = new SortFields("id");
//   static Name = new SortFields("name");

//   constructor(name) {
//     this.name = name;
//   }
// }

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

const Filter = ({ filterSort, setFilterSort, openFilter }) => {
  const selectedTypes = Object.values(filterSort.filter.typeCriteria);
  const category = filterSort.filter.special;
  const sortStat = filterSort.sort.sortStat;
  const statAsc = filterSort.sort.statAsc;
  const sortId = filterSort.sort.sortId;
  const sortName = filterSort.sort.sortName;
  const idAsc = filterSort.sort.idAsc;
  const nameAsc = filterSort.sort.nameAsc;

  // console.log(filterSort);
  // console.log(sortStat);

  // console.log(statOptions.map((stat) => stat.value));
  // console.log(statOptions.map((stat) => stat.value).indexOf(sortStat));
  // console.log(statOptions[2]);

  const selectStyles = {
    container: (base) => ({ ...base, width: "7rem" }),
  };

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

    return setFilterSort(newFilterSort);
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
            {/* <label htmlFor="isMythic">Is Mythic</label>
            <input type="checkbox" id="isMythic"></input>
            <label htmlFor="isLegendary">Is Legendary</label>
            <input type="checkbox" id="isLegendary"></input>
            <label htmlFor="isBaby">Is Baby</label>
            <input type="checkbox" id="isBaby"></input> */}
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
                  sortStat
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
                  sortStat
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
      <CloseButton type="button">Apply and Close</CloseButton>
    </Wrapper>
  );
};

export default Filter;
