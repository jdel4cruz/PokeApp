import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  gap: 2rem;
  justify-content: space-between;
  min-width: 100%;

  background: white;
  border-radius: 12px;
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
  font-size: 2rem;
  align-self: center;

  font-weight: bold;
  text-transform: capitalize;
`;
export const PokemonType = styled.div`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const PokemonAbilities = styled.div`
  width: 100%;
  padding: 0;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
`;
export const PokemonAbility = styled.li`
  font-size: var(--fontSmall);
  padding: 0.25rem 0;
`;
