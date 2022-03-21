import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    margin-top: 1rem;
    gap: 0 0.5rem;
  }

  @media screen and (max-width: 480px) {
    flex-flow: column nowrap;
    margin-top: 1rem;
    gap: 0 0.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--pokedexBlue);
  display: ${(props) => props.isActive};
  justify-content: space-between;
  align-items: center;

  text-decoration: none;

  font-size: 2rem;
  font-weight: bold;
  padding: 0 1rem;

  text-decoration: ${(props) =>
    props.current === "true" ? "underline" : "none"};
  pointer-events: ${(props) => (props.current === "true" ? "none" : "")};

  :visited {
    color: var(--pokedexBlue);
  }

  @media screen and (max-width: 1600px) {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;
