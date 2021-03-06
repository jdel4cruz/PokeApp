import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: 80%;

  border: 1px solid black;
  padding: 0;
  margin-top: 3rem;
  background-color: ${(props) => props.backgroundColor || ""};

  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AbilityHeaderContainer = styled.div`
  position: sticky;
  background-color: white;
  top: 0;
`;

export const AbilityListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AbilityListTitle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  font-size: var(--fontLarge);
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || ""};
`;

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
