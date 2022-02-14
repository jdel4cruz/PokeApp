import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  width: 100%;
  overflow: hidden;
  align-items: center;
  gap: 2rem 0;
`;

export const GridOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  bottom: 1rem;
`;

export const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  display: inline;
  background-color: var(--pokedexGreen);
  border-radius: 10px;
`;