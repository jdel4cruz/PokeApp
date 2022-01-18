import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  position: relative;
`;

export const Rotated = styled.img`
  width: 30%;
  height: fit-content;
  transform: rotate(25deg) scaleX(-1);
  position: relative;
  bottom: 4rem;
  left: 2rem;
`;

export const Static = styled.img`
  width: 70%;
  height: auto;
`;
