import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgb(153, 209, 250);
  width: 90%;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export const StyledLink = styled(Link)`
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
