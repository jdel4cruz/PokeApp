import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  position: relative;
  width: 800px;

  padding: 3rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ImgContainer = styled.div`
  min-width: 35%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;

  min-width: 3rem;
  min-height: 3rem;
  top: 1rem;
  right: 1rem;
  padding: 0;
  border: none;

  ::before,
  ::after {
    position: absolute;
    right: -1.4px;
    content: "";
    background-color: black;
    width: 100%;

    border: 1px solid black;
  }

  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;
