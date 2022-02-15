import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: var(--pokedexGreen);
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: end;

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
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 36px;
  padding: 1rem 2rem;

  :visited {
    color: inherit;
  }
`;

export const Logo = styled.img`
  max-width: 10rem;
  height: fit-content;
`;
