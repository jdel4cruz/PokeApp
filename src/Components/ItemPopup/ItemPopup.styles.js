import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  position: fixed;
  width: 800px;

  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

  padding: 3rem 1rem;
  padding-left: 0;
  background-color: white;
  border: 1rem solid var(--pokedexBlue);
  border-radius: 12px;

  z-index: 99999;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    height: 80%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 6px solid var(--pokedexBlue);
    padding: 1rem;
  }
`;

export const ImgContainer = styled.div`
  min-width: 35%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  border: none;
  align-self: center;
  padding: 1rem 2rem;
  background-color: var(--pokedexBlue);
  border-radius: 3px;

  width: fit-content;
  font-size: var(--fontLarge);
  font-weight: bold;
  color: black;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--pokedexOrange);
    color: white;
  }

  @media screen and (max-width: 600px) {
    font-size: var(--fontSmall);
  }
`;

export const Name = styled.div`
  text-transform: capitalize;
`;
