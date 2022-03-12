import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 2rem 0;

  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 2000px;

  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.isOpen
      ? "rgba(0, 0, 0, 0.8)"
      : props.popup
      ? "rgba(0, 0, 0, 0.8)"
      : "transparent"};

  visibility: ${(props) =>
    props.isOpen ? "visible" : props.popup ? "visible" : "hidden"};

  z-index: 1;
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
  display: inline;
  background-color: ${(props) =>
    props.isOpen ? "var(--pokedexOrange)" : "var(--pokedexBlue)"};
  color: ${(props) => (props.isOpen ? "white" : "black")};
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 0 1rem;

  font-weight: bold;
  font-size: var(--fontMed);

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--pokedexOrange);
    color: white;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const SearchBar = styled.input`
  padding: 5px;
  margin-left: 0.5rem;
  margin-right: 1rem;
  width: 20%;

  font-size: var(--fontSmall);
`;

export const SearchLabel = styled.h2``;
