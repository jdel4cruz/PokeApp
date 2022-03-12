import styled from "styled-components";

export const AbilityContainer = styled.li`
  display: grid;
  grid-template-columns: 10rem 6rem 1fr;
  border: 1px solid black;

  div {
    font-size: ${(props) => (props.isHeader ? "var(--fontMed)" : "")};
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 6rem 4rem 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 4rem 2.7rem 1fr;
  }
`;

export const AbilityCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};
`;
