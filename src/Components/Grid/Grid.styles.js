import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  max-width: 90%;
  height: fit-content;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 2rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
