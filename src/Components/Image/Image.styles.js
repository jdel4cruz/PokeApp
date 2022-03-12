import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;

  margin-top: 3rem;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 90%;

  height: auto;
`;
