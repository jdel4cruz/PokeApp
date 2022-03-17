// A bunch of arrays filled with objects that contain the label and value properties for the filter options.
export const filterOptions = [
  { value: "", label: "Choose Category" },
  { value: "Consumable", label: "Consumable" },
  { value: "Battle Item", label: "Battle Item" },
  { value: "Held Item", label: "Held Item" },
  { value: "Evolution", label: "Evolution" },
  { value: "Key Item", label: "Key Item" },
  { value: "Sellable", label: "Sellable" },
  { value: "TM", label: "TM" },
];

export const sortOptions = [
  { value: "id", label: "Id" },
  { value: "name", label: "Name" },
];

export const orderOptions = [
  { value: "asc", label: "Asc" },
  { value: "desc", label: "Desc" },
];

export const selectStyles = {
  container: (base) => ({ ...base, width: "7rem" }),
};

export const filterVal = (filter) =>
  filter
    ? filterOptions[filterOptions.map((option) => option.value).indexOf(filter)]
    : filterOptions[0];

export const sortVal = (sortParams) =>
  sortOptions[
    sortOptions.map((option) => option.value).indexOf(sortParams.criteria)
  ];

export const orderVal = (sortParams) =>
  orderOptions[
    orderOptions.map((option) => option.value).indexOf(sortParams.order)
  ];
