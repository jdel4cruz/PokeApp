import { useState } from "react";

//Components
import AbilityList from "../../Components/AbilityList";

import Pagination from "../../Components/Pagination";

//Styles
import { Wrapper, ListOptions } from "./AllAbilities.styles";

//Hooks
import { useAbilityFetch } from "../../Hooks/useAbilityFetch";

const AllAbilities = () => {
  const { abilities, currentIndex, setCurrentIndex } = useAbilityFetch();

  if (abilities == null) {
    return null;
  }

  return (
    <Wrapper>
      <AbilityList
        abilities={abilities[currentIndex]}
        title="Abilities By Name"
      />
      <ListOptions>
        <Pagination
          data={abilities}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </ListOptions>
    </Wrapper>
  );
};

export default AllAbilities;
