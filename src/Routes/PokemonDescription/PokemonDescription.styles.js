import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  overflow: scroll;

  margin-top: 1rem;
  align-items: center;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const HomeGrid = styled.div`
  display: grid;
  width: 1400px;
  flex-grow: 1;

  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: min-content 1fr;

  grid-template-areas:
    "text weakness"
    "image stats";
`;

export const PokemonText = styled.div`
  grid-area: text;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WeaknessContainer = styled.div`
  grid-area: weakness;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: center;
  grid-area: image;
  padding-bottom: 3rem;
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: end;
  padding-bottom: 3rem;

  grid-area: stats;
`;
