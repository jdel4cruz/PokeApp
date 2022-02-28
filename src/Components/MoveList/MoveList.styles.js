import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: var(--maxWidth);

  border: 1px solid black;
  padding: 0;
  margin-top: 3rem;
  background-color: ${(props) => props.backgroundColor || ""};

  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MoveHeaderContainer = styled.div`
  position: sticky;
  background-color: white;
  top: 0;
`;

export const MoveListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MoveListTitle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  font-size: var(--fontLarge);
  background-color: ${(props) => props.backgroundColor || ""};
  text-transform: capitalize;
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
