import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: 80%;

  border: 1px solid black;
  padding: 0;
  margin-top: 2rem;
  background-color: ${(props) => props.backgroundColor || ""};

  max-height: 80%;

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
  font-size: 2rem;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || ""};
  color: black;
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
    @media screen and (max-width: 1000px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.isLevel
        ? "3rem 6rem 3rem 4rem 2rem 2rem 2rem 1fr"
        : "6rem 3rem 5rem 2.5rem 2.5rem 2.5rem 1fr"};
  }
`;

export const MoveCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  text-transform: ${(props) => (props.isName ? "capitalize" : "")};

  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;
