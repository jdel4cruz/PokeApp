import { useState } from "react";
import { useParams } from "react-router-dom";

//Hooks
import { usePokemonDescriptionFetch } from "../../Hooks/usePokemonDescriptionFetch";

//Components
import PokemonInfo from "../../Components/PokemonInfo";
import Image from "../../Components/Image";
import PokemonStats from "../../Components/PokemonStats";
import PokemonWeakness from "../../Components/PokermonWeakness/PokemonWeakness";

// Styles
import {
  Wrapper,
  HomeGrid,
  PokemonText,
  WeaknessContainer,
  ImgContainer,
  StatsContainer,
} from "./PokemonDescription.styles";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const { rawData, stats, abilities, sprite, id, name, pokemonTypes } =
    usePokemonDescriptionFetch(pokemonId);

  if (rawData == null) {
    return <div>loading</div>;
  }

  return (
    <Wrapper>
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
