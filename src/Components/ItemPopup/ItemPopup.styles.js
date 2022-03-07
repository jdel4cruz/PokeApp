import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  position: absolute;
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

// export const CloseButton = styled.button`
//   position: absolute;

//   min-width: 3rem;
//   min-height: 3rem;
//   top: 2rem;
//   right: 2rem;
//   padding: 0;
//   border: none;

//   ::before,
//   ::after {
//     position: absolute;
//     right: -1.4px;
//     content: "";
//     background-color: black;
//     width: 100%;

//     border: 1px solid black;
//   }

//   ::before {
//     transform: rotate(45deg);
//   }
//   ::after {
//     transform: rotate(-45deg);
//   }
// `;

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
`;

export const Name = styled.div`
  text-transform: capitalize;
`;
