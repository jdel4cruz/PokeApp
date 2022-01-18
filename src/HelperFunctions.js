import { v4 as uuidv4 } from "uuid";

//Components
import Card from "./Components/Card";

export const cardGenerator = (data) => {
  const cards = data.map((item, i) => (
    <Card img={item["image"]} text={item["text"]} key={i} />
  ));

  return cards;
};

export const keyGenerator = (data) =>
  data.forEach((item) => (item.key = uuidv4()));
