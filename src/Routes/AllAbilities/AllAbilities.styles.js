import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  overflow: hidden;
  height: 100%;
`;

export const ListOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  bottom: 0;
`;

export const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  display: inline;
  background-color: var(--pokedexGreen);
  border-radius: 10px;
  margin: 2rem 0;
`;
