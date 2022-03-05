import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  gap: 0.5rem;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  background: white;
  border-radius: 12px;
`;

export const Chart = styled.div`
  display: grid;

  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, min-content);
  border: 2px solid black;
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  border: 2px solid black;
  padding: ${(props) => (props.isValue ? "1rem" : ".5rem 1rem")};

  background-color: ${(props) => props.backgroundColor || "brown"};
  color: ${(props) => props.textColor || "white"};
`;
