import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const AccordionHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  &.screen-accordion {
    padding: 0 2rem;
    font-size: var(--fontLarge);
  }
`;

export const AccordionData = styled.div`
  max-height: 0;
  overflow: hidden;

  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  &.open {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;