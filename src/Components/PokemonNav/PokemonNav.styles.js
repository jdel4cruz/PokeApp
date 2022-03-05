import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  justify-content: space-between;

  text-decoration: none;

  font-size: 2rem;
  font-weight: bold;
  padding: 0 1rem;

  text-decoration: ${(props) => (props.isCurrent ? "underline" : "none")};
  pointer-events: ${(props) => (props.isCurrent ? "none" : "")};

  :visited {
    color: inherit;
  }
`;
