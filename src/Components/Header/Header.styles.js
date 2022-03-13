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

  @media screen and (max-width: 400px) {
    min-height: 6rem;
  }
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

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  width: fit-content;

  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? "translate(0%)" : "translate(100%)")};
  background: white;
  z-index: 2;

  ul {
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
  }

  li {
    list-style: none;
  }
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavButton = styled.div`
  position: absolute;

  right: 2rem;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 3px solid ${(props) => (props.isOpen ? `white` : "black")};
  transform: translateY(-50%);
  transition: all 0.25s linear;
  z-index: 2;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavMid = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  height: 5%;
  background: ${(props) => (props.isOpen ? `white` : "black")};
  transition: all 0.1s linear;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => (props.isOpen ? `white` : "black")};
    transition: all 0.25s ease-in-out;
  }
  ${(props) =>
    props.isOpen
      ? `
      background: transparent;
      &::before {
      transform: rotate(45deg) translateY(0);
    }
    
    &::after {
      transform: rotate(-45deg) translateY(0);
    }`
      : `
    &::before {
    transform: translateY(-10px);
     }

    &::after {
      transform: translateY(10px);
    }`}
`;

export const LogoContainer = styled.div`
  margin-left: 1rem;

  flex-shrink: 1;

  @media screen and (max-width: 400px) {
    width: 40%;
  }
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

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
