import { filterVal } from "../ItemFilter/constants";

// A bunch of arrays filled with objects that contain the label and value properties for the filter options.
export const filterOptions = [
  { value: null, label: "Choose Category" },
  { value: "priority", label: "Priority" },
  { value: "type_id", label: "Type" },
  { value: "move_damage_class_id", label: "Attack Class" },
];

export const priorityOptions = [
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

export const sortOptions = [
  { value: "id", label: "Id" },
  { value: "name", label: "Name" },
  { value: "accuracy", label: "Accuracy" },
  { value: "power", label: "Power" },
];

export const orderOptions = [
  { value: "asc_nulls_first", label: "Asc" },
  { value: "desc_nulls_last", label: "Desc" },
];

export const optionSelect = (filter) => {
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

export const selectStyles = {
  container: (base) => ({ ...base, width: "7rem" }),
};

export const filterOptionsVal = (filter) =>
  filter
    ? filterOptions[filterOptions.map((option) => option.value).indexOf(filter)]
    : filterOptions[0];

export const subOptionsVal = (subOptions, filterVal) =>
  filterVal != null
    ? subOptions[subOptions.map((option) => option.value).indexOf(filterVal)]
    : { value: "", label: "Choose Filter" };

export const sortOptionVal = (sort) =>
  sortOptions[sortOptions.map((option) => option.value).indexOf(sort)];

export const orderOptionVal = (sortVal) =>
  orderOptions[orderOptions.map((option) => option.value).indexOf(sortVal)];
