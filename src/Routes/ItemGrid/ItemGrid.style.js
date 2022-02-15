import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem 0;

  width: 100%;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 2000px;
  background-color: rgba(0, 0, 0, 0.7);

  display: ${(props) => (props.popup != null ? "block" : "none")};
`;
