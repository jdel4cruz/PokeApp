import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  gap: 1rem;
  padding-top: 1rem;

  h2 {
    font-size: 2rem;
    margin: 0;
  }
`;

export const Chart = styled.div`
  display: grid;

  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, min-content);
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  background-color: ${(props) => props.backgroundColor || "brown"};
  color: ${(props) => props.textColor || "white"};
`;
