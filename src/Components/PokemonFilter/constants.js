// A bunch of arrays filled with objects that contain the label and value properties for the filter options.
export const filterOptions = [
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

export const categoryOptions = [
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

export const orderOptions = [
  { value: true, label: "Asc" },
  { value: false, label: "Desc" },
];

export const idNameOptions = [
  { value: { isOn: false, order: false }, label: "Asc/Desc" },
  { value: { isOn: true, order: true }, label: "Asc" },
  { value: { isOn: true, order: false }, label: "Desc" },
];

export const statOptions = [
  { value: null, label: "Choose stat" },
  { value: 0, label: "Hp" },
  { value: 1, label: "Atk" },
  { value: 2, label: "Def" },
  { value: 3, label: "Sp. Atk" },
  { value: 4, label: "Sp.Def" },
  { value: 5, label: "Speed" },
];

//Styles used for the select components
export const selectStyles = {
  container: (base) => ({ ...base, width: "7rem" }),
};

export const typeVal_1 = (selectedTypes) =>
  selectedTypes.length
    ? filterOptions[
        filterOptions.map((option) => option.value).indexOf(selectedTypes[0])
      ]
    : filterOptions[0];

export const typeVal_2 = (selectedTypes) =>
  selectedTypes.length > 1
    ? filterOptions[
        filterOptions.map((option) => option.value).indexOf(selectedTypes[1])
      ]
    : "";

export const categoryVal = (category) =>
  category == "is_legendary"
    ? categoryOptions[1]
    : category == "is_mythical"
    ? categoryOptions[2]
    : category == "is_baby"
    ? categoryOptions[3]
    : categoryOptions[0];

export const statVal = (sortStat) =>
  sortStat != null
    ? statOptions[statOptions.map((stat) => stat.value).indexOf(sortStat)]
    : statOptions[0];

export const statOrderVal = (sortStat, statAsc) =>
  sortStat != null
    ? orderOptions[orderOptions.map((option) => option.value).indexOf(statAsc)]
    : orderOptions[0];

export const idVal = (sortId, idAsc) =>
  sortId && idAsc
    ? idNameOptions[1]
    : sortId && !idAsc
    ? idNameOptions[2]
    : idNameOptions[0];

export const nameVal = (sortName, nameAsc) =>
  sortName && nameAsc
    ? idNameOptions[1]
    : sortName && !nameAsc
    ? idNameOptions[2]
    : idNameOptions[0];
