import { v4 as uuidv4 } from "uuid";

//Components
import Card from "./Components/Card";

export const cardGenerator = (data, filterSort) => {
  console.log("creating cards");
  const cards = data.map((item, i) => (
    <Card
      img={item.sprite}
      name={item.name}
      id={item.id}
      key={i}
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
