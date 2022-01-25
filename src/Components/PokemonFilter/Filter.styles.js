import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: -25rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 2rem 0;
  max-height: 100%;
  width: fit-content;
  padding: 1rem;
  background-color: grey;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  transform: translateX(0);
  transition: transform 0.7s ease 0s;

  &.open {
    transform: translateX(-25rem);
    transition: transform 0.7s ease 0s;
  }

  ul {
    padding: 0;
  }

  h2 {
    margin: 0;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SelectionTitle = styled.h1`
  margin: 0;
`;

export const Selection = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 1rem 0;

  margin-top: 2rem;
`;

export const CloseButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: var(--pokedexGreen);
  border-radius: 10px;
`;
