import styled from "styled-components";

export const Wrapper = styled.div`
  width: 10rem;
  height: 14rem;
  background-color: var(--pokedexGreen);

  &.broken {
    display: none;
  }
`;

export const Wrapper2 = styled.div`
  border: 3px solid var(--pokedexBlue);
  width: 10rem;
  height: 14rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s ease-in-out;

  &.broken {
    display: none;
  }

  &:hover {
    border-color: #ea7d17;
  }
`;

export const Corner = styled.div`
  position: absolute;
  content: "";
  width: 3rem;
  height: 3rem;
  border-bottom: 3px solid var(--pokedexBlue);

  top: -1.5rem;
  right: -1.5rem;
  transform-origin: center;

  transform: rotate(45deg);
  transition: all 0.3s ease-in-out;

  background-color: white;

  ${Wrapper}:hover & {
    transform: translate(1.5rem, -1.5rem) rotate(45deg);
    border-color: var(--pokedexOrange);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CardText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  div {
    text-transform: capitalize;
  }
`;
