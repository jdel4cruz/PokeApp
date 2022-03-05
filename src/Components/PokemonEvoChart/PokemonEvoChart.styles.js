import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: center;

  padding-bottom: 3rem;
`;

export const NavContainer = styled.div`
  margin: 3rem 0;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.length < 3 ? "column nowrap" : "row nowrap")};

  align-items: center;
  padding: 2rem;
  max-width: var(--maxWidth);
  gap: 4rem;

  background-color: var(--pokedexBlue);
  border-radius: 12px;
`;

export const EvoTier = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.length < 2 ? "column nowrap" : "row wrap")};
  justify-content: center;

  gap: 1rem;
`;
