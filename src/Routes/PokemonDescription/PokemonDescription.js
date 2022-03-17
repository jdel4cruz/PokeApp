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

//Background image
import Background from "../../Images/Pokedex_Background.png";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const { rawData, stats, abilities, sprite, id, name, pokemonTypes, hasEvo } =
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
            hasEvo={hasEvo}
          ></PokemonInfo>
        </PokemonText>
        <ImgContainer>
          <Image pokemonImg={sprite} background={Background}></Image>
        </ImgContainer>
        <WeaknessContainer>
          <PokemonWeakness />
        </WeaknessContainer>
        <StatsContainer>
          <PokemonStats stats={stats}></PokemonStats>
        </StatsContainer>
      </HomeGrid>
    </Wrapper>
  );
};

export default Pokemon;
