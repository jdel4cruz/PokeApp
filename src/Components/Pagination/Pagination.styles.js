import styled from "styled-components";

export const Wrapper = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin: 0;
`;

export const PageItem = styled.li`
  border: 1px solid grey;
  padding: 0.5rem 1rem;

  pointer-events: ${(props) => (props.isCurrent ? "none" : "auto")};
`;
