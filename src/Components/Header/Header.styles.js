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
  top: 8rem;
  right: ${(props) => (props.isOpen ? `50%` : "0")};
  /* right: 50%; */
  width: 100%;
  height: fit-content;
  color: black;
  transition: all 0.3s ease-in-out;
  /* transform: translate(50%); */
  transform: ${(props) =>
    props.isOpen ? "translate(50%)" : "translate(100%)"};
  background: white;
  z-index: 2;

  ul {
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavMenuItem = styled.li`
  list-style: none;

  background: ${(props) =>
    props.current == props.id ? "var(--pokedexOrange)" : "white"};
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
      transform: rotate(-45deg) translateY(0);
    }
    
    &::after {
      transform: rotate(45deg) translateY(0);
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

export const StyledLink = styled(Link).attrs((props) => ({
  id: props.id,
  current: props.current,
}))`
  ${(props) => console.log(props)};
  position: relative;

  display: inline-block;
  text-decoration: none;
  overflow: hidden;

  font-size: 48px;
  font-weight: bold;
  margin: 1rem 1rem;

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

  @media screen and (min-width: 700px) {
    &:visited {
      color: inherit;
    }
  }

  @media screen and (max-width: 930px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 700px) {
    color: ${(props) => (props.current === props.id ? "white" : "black")};
    font-size: 6rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 5rem;
  }
`;

export const Logo = styled.img`
  max-width: 12rem;
  height: fit-content;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;

  top: 8rem;

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
