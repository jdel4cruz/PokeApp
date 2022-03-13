import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  height: 40rem;
  width: fit-content;

  @media screen and (max-width: 1600px) {
    height: 30rem;
  }

  @media screen and (max-width: 1200px) {
    height: 20rem;
  }

  @media screen and (max-width: 960px) {
    height: 30rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  img {
    width: auto;
    height: 100%;
  }
`;

export const PokemonName = styled.h2`
  text-transform: Capitalize;
  margin: 1rem;
`;

export const EvoCondition = styled.div`
  text-align: center;
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
