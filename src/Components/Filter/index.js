//Styles
import { Wrapper, Selection, SelectionTitle } from "./Filter.styles";

const Filter = ({ filters, sort }) => (
  <Wrapper>
    <div>
      <SelectionTitle>Filter</SelectionTitle>
      <Selection>
        <li>
          <label htmlFor="type-selection-1">Type:</label>
          <select id="type-selection-1">
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
          </select>
          <select id="type-selection-2">
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
          </select>
        </li>
        <li>
          <label htmlFor="isMythic">Is Mythic</label>
          <input type="checkbox" id="isMythic"></input>
        </li>
        <li>
          <label htmlFor="isLegendary">Is Legendary</label>
          <input type="checkbox" id="isLegendary"></input>
        </li>
        <li>
          <label htmlFor="isBaby">Is Baby</label>
          <input type="checkbox" id="isBaby"></input>
        </li>
      </Selection>
    </div>
    <div>
      <SelectionTitle>Sort by:</SelectionTitle>
      <Selection>
        <li>
          <label htmlFor="stat">Stat:</label>
          <select id="stat">
            <option value="">Choose stat</option>
            <option value="hp">HP</option>
            <option value="atk">Attack</option>
            <option value="sp-atk">Special Attack</option>
            <option value="def">Defense</option>
            <option value="sp-def">Special Defense</option>
            <option value="spd">Speed</option>
          </select>
          <select id="stat-sort">
            <option value="">Asc/Desc</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </li>
        <li>
          <label htmlFor="id">ID:</label>
          <select id="id">
            <option value="">Asc/Desc</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </li>
        <li>
          <label htmlFor="name">Name:</label>
          <select id="name">
            <option value="">Asc/Desc</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </li>
      </Selection>
    </div>
  </Wrapper>
);

export default Filter;
