import styled from "styled-components";

export const AbilityContainer = styled.li`
  display: grid;
  grid-template-columns: 10rem 6rem 1fr;
  border: 1px solid black;

  div {
    font-size: ${(props) => (props.isHeader ? "var(--fontMed)" : "")};
  }
`;

export const AbilityCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};
`;
