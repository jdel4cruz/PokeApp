import styled from "styled-components";

//Helpers
import { cardGenerator } from "./HelperFunctions";

//Components
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Pagination from "./Components/Pagination";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  align-items: center;
  gap: 2rem 0;
`;

const data = [
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
  { image: "./Images/bulbasaur.png", text: { name: "bulbasaur", id: 1 } },
  { image: "./Images/ivysaur.png", text: { name: "ivysaur", id: 2 } },
  { image: "./Images/venasaur.png", text: { name: "venasaur", id: 3 } },
];

const cards = cardGenerator(data);
console.log(data);

const Pokemon = () => (
  <Wrapper>
    <Header />
    <Grid>{cards}</Grid>
    <Pagination />
  </Wrapper>
);

export default Pokemon;
