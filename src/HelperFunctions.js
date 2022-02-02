import { type } from "@testing-library/user-event/dist/type";
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "./Components/Card";

export const cardGenerator = (data, filterSort, page, limit) => {
  console.log("creating cards");
  const cards = data.map((item, i) => (
    <Card
      img={item.sprite}
      name={item.name}
      id={item.id}
      key={i - limit + page * limit}
      filterSort={filterSort}
    />
  ));
  console.log(cards);
  return cards;
};

export const keyGenerator = (data) =>
  data.forEach((item) => (item.key = uuidv4()));

export const spriteGenerator = (data) =>
  data.forEach(
    (item) =>
      (item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`)
  );

export const calcDamageFactor = (weakness1, weakness2) => {
  console.log(weakness2);
  const calc = weakness1.map((type, i) =>
    weakness2.length > 1
      ? (type.damage_factor * weakness2[i].damage_factor) / 100
      : type.damage_factor
  );

  return calc;
};
