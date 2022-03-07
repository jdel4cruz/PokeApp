import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;

  overflow: hidden;
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
    background-color: transparent;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export const CardImg = styled.img`
  width: 80%;
  height: auto;
`;

export const CardText = styled.div`
  display: flex;
  flex-flow: row nowrap;

  min-width: 100%;
  height: 2.5rem;
  gap: 1rem;

  font-size: var(--fontMed);
  font-weight: bold;

  color: #3b3e3d;
  text-transform: capitalize;
  background-color: var(--pokedexBlue);

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  ${Wrapper}:hover & {
    background-color: #ea7d17;
    color: white;
  }
`;

export const CardId = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;

  ::after {
    position: relative;
    content: "";
    border: 1px solid #3b3e3d;
    height: 75%;
    right: -0.5rem;
    background-color: black;

    transition: border-color 0.3s ease-in-out;

    ${Wrapper}:hover & {
      border-color: white;
      background-color: white;
    }
  }
`;

export const CardName = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
