import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #7dbfda;

  width: 10rem;
  height: 14rem;

  transition: all 0.2s ease-in-out;

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
  border-bottom: 3px solid #7dbfda;

  top: -1.5rem;
  right: -1.5rem;
  transform-origin: center;

  transform: rotate(45deg);
  transition: all 0.1s ease;

  background-color: white;

  ${Wrapper}:hover & {
    border-color: transparent;
    width: 0;
    height: 0;
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

  width: 100%;
  height: 2.5rem;
  gap: 1rem;

  font-size: var(--fontMed);
  font-weight: bold;

  color: #3b3e3d;
  text-transform: capitalize;
  background-color: #7dbfda;

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

    transition: border-color 0.3s ease-in-out;

    ${Wrapper}:hover & {
      border-color: white;
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
