import styled from "styled-components";
import { useState } from "react";
import Select from "react-select";

//Styles
import {
  Wrapper,
  Selection,
  SelectionTitle,
  SelectContainer,
} from "./Filter.styles";

const Filter = ({ filterSort, setFilterSort, openFilter }) => {
  const selectedTypes = Object.values(filterSort.filter.typeCriteria);
  const sortStat = filterSort.sort.sortStat;
  const sortAsc = filterSort.sort.sortAsc;
  const sortId = filterSort.sort.sortId;
  const sortName = filterSort.sort.sortName;

  console.log(filterSort);
  console.log(sortStat);

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

  const orderOptions = [
    { value: "", label: "Asc/Desc" },
    { value: true, label: "Asc" },
    { value: false, label: "Desc" },
  ];

  const statOptions = [
    { value: "", label: "Choose stat" },
    { value: 0, label: "Hp" },
    { value: 1, label: "Atk" },
    { value: 2, label: "Def" },
    { value: 3, label: "Sp. Atk" },
    { value: 4, label: "Sp.Def" },
    { value: 5, label: "Speed" },
  ];
  console.log(statOptions.map((stat) => stat.value));
  console.log(statOptions.map((stat) => stat.value).indexOf(sortStat));
  console.log(statOptions[2]);

  const selectStyles = {
    container: (base) => ({ ...base, width: "7rem" }),
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
                defaultValue={
                  selectedTypes.length
                    ? filterOptions[
                        filterOptions
                          .map((option) => option.value)
                          .indexOf(selectedTypes[0])
                      ]
                    : filterOptions[0]
                }
              />

              <Select
                options={filterOptions}
                styles={selectStyles}
                defaultValue={
                  selectedTypes.length > 1
                    ? filterOptions[
                        filterOptions
                          .map((option) => option.value)
                          .indexOf(selectedTypes[1])
                      ]
                    : ""
                }
              />
            </SelectContainer>

            {/* <label htmlFor="type-selection-1">Type:</label>
            <select
              id="type-selection-1"
              defaultValue={selectedTypes.length > 0 ? selectedTypes[0] : ""}
            >
              <option value="">Type 1</option>
              <option value="normal">Normal</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Elec</option>
              <option value="ice">Ice</option>
              <option value="fighting">Fighting</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="flying">Flying</option>
              <option value="psychic">Psychic</option>
              <option value="bug">Bug</option>
              <option value="rock">Rock</option>
              <option value="ghost">Ghost</option>
              <option value="dark">Dark</option>
              <option value="dragon">Dragon</option>
              <option value="steel">Steel</option>
              <option value="fairy">Fairy</option>
            </select> */}
            {/* <select id="type-selection-2">
              <option value="">Type 1</option>
              <option value="normal">Normal</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Elec</option>
              <option value="ice">Ice</option>
              <option value="fighting">Fighting</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="flying">Flying</option>
              <option value="psychic">Psychic</option>
              <option value="bug">Bug</option>
              <option value="rock">Rock</option>
              <option value="ghost">Ghost</option>
              <option value="dark">Dark</option>
              <option value="dragon">Dragon</option>
              <option value="steel">Steel</option>
              <option value="fairy">Fairy</option>
            </select> */}
          </li>
          <li>
            <h2>Category</h2>
            <label htmlFor="isMythic">Is Mythic</label>
            <input type="checkbox" id="isMythic"></input>
            <label htmlFor="isLegendary">Is Legendary</label>
            <input type="checkbox" id="isLegendary"></input>
            <label htmlFor="isBaby">Is Baby</label>
            <input type="checkbox" id="isBaby"></input>
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
                defaultValue={
                  sortStat
                    ? statOptions[
                        statOptions.map((stat) => stat.value).indexOf(sortStat)
                      ]
                    : statOptions[0]
                }
              />
              <Select
                options={orderOptions}
                styles={selectStyles}
                defaultValue={
                  sortStat
                    ? orderOptions[
                        orderOptions
                          .map((option) => option.value)
                          .indexOf(sortAsc)
                      ]
                    : orderOptions[0]
                }
              />
            </SelectContainer>

            {/* <label htmlFor="stat">Stat:</label>
            <select id="stat">
              <option value="">Choose stat</option>
              <option value="hp">HP</option>
              <option value="atk">Attack</option>
              <option value="sp-atk">Special Attack</option>
              <option value="def">Defense</option>
              <option value="sp-def">Special Defense</option>
              <option value="spd">Speed</option>
            </select> */}
            {/* <select id="stat-sort">
              <option value="">Asc/Desc</option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select> */}
          </li>

          <li>
            <h2>Id:</h2>
            <Select
              options={orderOptions}
              styles={selectStyles}
              defaultValue={
                sortId
                  ? orderOptions[
                      orderOptions.map((option) => option.value).indexOf(sortId)
                    ]
                  : orderOptions[0]
              }
            />
            {/* <label htmlFor="id">ID:</label>
            <select id="id">
              <option value="">Asc/Desc</option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select> */}
          </li>

          <li>
            <h2>Name:</h2>
            <Select
              options={orderOptions}
              styles={selectStyles}
              defaultValue={
                sortName
                  ? orderOptions[
                      orderOptions
                        .map((option) => option.value)
                        .indexOf(sortName)
                    ]
                  : orderOptions[0]
              }
            />
            {/* <label htmlFor="name">Name:</label>
            <select id="name">
              <option value="">Asc/Desc</option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select> */}
          </li>
        </Selection>
      </div>
    </Wrapper>
  );
};

export default Filter;
