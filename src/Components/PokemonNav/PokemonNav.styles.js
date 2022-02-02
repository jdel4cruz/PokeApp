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

  font-size: var(--fontMed);
  padding: 1rem;

  :visited {
    color: inherit;
  }
`;
