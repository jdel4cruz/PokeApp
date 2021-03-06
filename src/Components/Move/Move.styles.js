import styled from "styled-components";

export const MoveContainer = styled.li`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLevel
      ? "4rem 10rem 6rem 8rem 4rem 4rem 4rem 1fr"
      : "10rem 6rem 8rem 4rem 4rem 4rem 1fr"};
  border: 1px solid black;

  div {
    font-size: ${(props) => (props.isHeader ? "var(--fontMed)" : "")};
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.isLevel
        ? "4rem 6rem 3rem 4rem 2rem 2rem 2rem 1fr"
        : "6rem 3rem 5rem 2.5rem 2.5rem 2.5rem 1fr"};
    border: 1px solid black;
  }
`;

export const MoveCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: ${(props) => (props.isEffect ? "" : "center")};
  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};
`;
