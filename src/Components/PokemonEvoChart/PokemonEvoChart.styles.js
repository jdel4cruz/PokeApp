import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: center;

  padding-bottom: 3rem;
`;

export const ChartContainer = styled.div`
  background-color: var(--pokedexGreen);
  display: flex;
  flex-flow: ${(props) => (props.length < 3 ? "column nowrap" : "row nowrap")};

  align-items: center;
  padding: 2rem;
  max-width: var(--maxWidth);
  gap: 4rem;
`;

export const EvoTier = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.length < 2 ? "column nowrap" : "row wrap")};
  justify-content: center;

  gap: 1rem;
`;
