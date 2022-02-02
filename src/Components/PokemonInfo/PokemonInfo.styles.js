import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 1rem;
  justify-content: space-between;
  min-width: 100%;
`;

export const TextContainer = styled.div`
  width: 50%;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const PokemonNameNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PokemonName = styled.div`
  font-size: var(--fontMed);
  align-self: center;
`;
export const PokemonType = styled.div``;
export const PokemonAbilities = styled.div`
  width: 100%;
  padding: 0;
`;
export const PokemonAbility = styled.li`
  font-size: var(--fontSmall);
  padding: 0.25rem 0;
`;
