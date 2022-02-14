import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const MoveListContainer = styled.ul`
  list-style: none;

  width: var(--maxWidth);
  border: 1px solid black;
  padding: 0;
  background-color: ${(props) => props.backgroundColor || ""};
`;

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
`;

export const MoveCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};
`;

export const MoveListTitle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  font-size: var(--fontLarge);
  background-color: ${(props) => props.backgroundColor || ""};
`;
