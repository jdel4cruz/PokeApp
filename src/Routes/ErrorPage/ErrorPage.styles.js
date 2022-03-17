import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem 0;
  padding: 3rem;

  @media screen and (max-width: 900px) {
    flex-flow: column-reverse;
    width: 100%;
    padding: 0;
    padding-top: 3rem;
  }
  @media screen and (max-width: 900px) {
    padding: none;
    justify-content: flex-end;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  height: auto;

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const HeroText = styled.div`
  width: 25%;

  font-size: var(--fontLarge);

  @media screen and (max-width: 900px) {
    width: 90%;
    font-size: var(--fontMed);
  }
`;
