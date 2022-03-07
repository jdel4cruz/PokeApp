import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: -25rem;
  top: 50%;

  display: flex;
  flex-flow: column nowrap;

  gap: 3rem 0;
  max-height: 100%;
  width: fit-content;
  padding: 1rem;
  background-color: grey;
  z-index: 99999;

  background-color: white;
  color: black;
  border: 12px solid var(--pokedexOrange);

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  transform: translate(0, -50%);
  transition: transform 0.7s ease 0s;

  &.open {
    transform: translate(-25rem, -50%);
    transition: transform 0.7s ease 0s;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h2 {
    color: black;
    margin-bottom: 0.5rem;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;

  height: fit-content;
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
  align-self: center;
  padding: 1rem 2rem;
  background-color: var(--pokedexOrange);
  border-radius: 10px;

  width: 70%;
  font-size: var(--fontLarge);
  font-weight: bold;
  color: white;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    filter 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
