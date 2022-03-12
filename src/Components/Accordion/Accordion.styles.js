import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border: 3px solid black;
  background: var(--pokedexBlue);
`;

export const AccordionContainer = styled.div``;

export const AccordionHeader = styled.div`
  margin-bottom: -3px;
  border-bottom: 3px solid black;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  &:hover {
    cursor: pointer;
  }

  &.screen-accordion {
    padding: 0 2rem;
    font-size: var(--fontLarge);
  }

  h2 {
    text-transform: capitalize;
    font-size: var(--fontLarge);
  }
`;

export const AccordionData = styled.div`
  max-height: 0;
  overflow: hidden;
  background: white;
  font-size: var(--fontMed);

  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  &.open {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }

  div {
    padding: 1rem;
  }
`;
