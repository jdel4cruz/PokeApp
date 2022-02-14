import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 10rem;
  height: 14rem;
  background-color: var(--pokedexGreen);

  &.broken {
    display: none;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CardText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;

&: focus, 
&: hover, 
&: visited, 
&: link,
&: active {
  text-decoration: none;
}
`;
