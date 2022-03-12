import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  padding: 2rem;

  border-radius: 12px;

  h2 {
    margin-top: 0;
    font-size: 2rem;
  }

  background: white;
  border-radius: 12px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
