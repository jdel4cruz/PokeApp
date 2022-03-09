import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  flex-grow: 1;

  padding-top: 3rem;
  align-items: center;

  background: linear-gradient(135deg, transparent, 90%, var(--pokedexBlue)),
    linear-gradient(225deg, transparent, 90%, var(--pokedexBlue));
`;

export const HomeGrid = styled.div`
  display: grid;
  width: var(--maxWidth);
  height: fit-content;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  gap: 1rem;

  padding: 3rem;
  background: var(--pokedexBlue);
  grid-template-areas:
    "text weakness"
    "image stats";
  border-radius: 2rem;
  margin-bottom: 3rem;
`;

export const PokemonText = styled.div`
  grid-area: text;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WeaknessContainer = styled.div`
  position: relative;
  grid-area: weakness;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  grid-area: image;
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: end;

  grid-area: stats;
`;
