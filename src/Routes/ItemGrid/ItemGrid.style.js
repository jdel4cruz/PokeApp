import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 2rem 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: -10rem;
  width: 100%;
  min-height: 20000px;

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

  @media screen and (max-width: 700px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const SearchBar = styled.input`
  padding: 5px;
  margin-left: 0.5rem;
  margin-right: 1rem;
  width: 16rem;
  height: fit-content;

  font-size: var(--fontSmall);

  @media screen and (max-width: 700px) {
    width: 14rem;
  }
`;

export const SearchLabel = styled.h2``;

export const SearchBarContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: start;
  align-items: center;
`;
