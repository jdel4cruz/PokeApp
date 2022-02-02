import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//Hooks
import { usePokemonDescriptionFetch } from "./Hooks/usePokemonDescriptionFetch";

//Components
import Header from "./Components/Header";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonNav from "./Components/PokemonNav";
import Image from "./Components/Image";
import PokemonStats from "./Components/PokemonStats";
import PokemonWeakness from "./PokemonWeakness";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  overflow: scroll;
  align-items: center;
`;

const HomeGrid = styled.div`
  display: grid;
  width: 1400px;
  flex-grow: 1;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;

  grid-template-areas:
    "text weakness"
    "image stats";
`;

const PokemonText = styled.div`
  grid-area: text;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WeaknessContainer = styled.div`
  grid-area: weakness;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: center;
  grid-area: image;
  padding-bottom: 3rem;
`;

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: end;
  padding-bottom: 3rem;

  grid-area: stats;
`;

const Pokemon = () => {
  const { pokemonId } = useParams();
  const { state, stats, abilities, sprite, id, name, pokemonTypes } =
    usePokemonDescriptionFetch(pokemonId);

  if (state == null) {
    return <div>loading</div>;
  }

  return (
    <Wrapper>
      <Header />
      <HomeGrid>
        <PokemonText>
          <PokemonInfo
            name={name}
            id={id}
            types={pokemonTypes}
            abilities={abilities}
          ></PokemonInfo>
        </PokemonText>
        <WeaknessContainer>
          <PokemonWeakness />
        </WeaknessContainer>
        <ImgContainer>
          <Image pokemonImg={sprite}></Image>
        </ImgContainer>
        <StatsContainer>
          <PokemonStats stats={stats}></PokemonStats>
        </StatsContainer>
      </HomeGrid>
    </Wrapper>
  );
};

export default Pokemon;
