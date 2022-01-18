import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--pokedexGreen);
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: end;

  min-height: 8rem;
  width: 100%;
`;

export const NavContainer = styled.nav``;

export const LogoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const Logo = styled.img`
  max-width: 10rem;
  height: fit-content;
`;
