import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
  flex-grow: 1;
  flex-shrink: 1;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;
