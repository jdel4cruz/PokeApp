import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  position: absolute;
  width: 800px;

  top: 50%;
  transform: translateY(-50%);

  padding: 3rem 1rem;
  background-color: rgba(90, 90, 90);
  border-radius: 2rem;
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
  top: 2rem;
  right: 2rem;
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
