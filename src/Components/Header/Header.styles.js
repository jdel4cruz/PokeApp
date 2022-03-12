import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: var(--pokedexBlue);
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  min-height: 8rem;
  width: 100%;
`;

export const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
  }

  li {
    list-style: none;
  }
  flex-shrink: 1;
`;

export const LogoContainer = styled.div`
  margin-left: 1rem;
  flex-shrink: 1;
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: black;
  display: inline-block;
  text-decoration: none;
  overflow: hidden;

  font-size: 48px;
  font-weight: bold;
  margin: 1rem 1rem;

  &:visited {
    color: inherit;
  }

  &::before {
    position: absolute;

    content: "${(props) => props.children}";

    bottom: 0;

    color: white;
    overflow: hidden;
    transition: width 0.25s ease;

    height: 100%;
    width: 0;
    white-space: nowrap;
  }

  &:hover::before {
    width: 100%;
  }

  @media screen and (max-width: 930px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Logo = styled.img`
  max-width: 12rem;
  height: fit-content;
`;
