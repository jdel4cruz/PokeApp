import { useState } from "react";

//Components
import MoveList from "../../Components/MoveList";
import MoveFilter from "../../Components/MoveFilter";

//Styles
import { Wrapper, ListOptions, Button } from "./AllMoves.styles";

//Hooks
import { useAllMovesFetch } from "../../Hooks/useAllMovesFetch";

const types = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];

const atkTypes = ["Status", "Phys", "Spec"];

const AllMoves = () => {
  const { rawData, filterSort, setFilterSort, setPage } = useAllMovesFetch();
  const { filter, filterVal } = filterSort;
  const [isOpen, setIsOpen] = useState(false);

  if (rawData == null) {
    return null;
  }

  let title;

  switch (filter) {
    case "priority":
      title = "priority moves";
      break;
    case "type_id":
      title = `${types[filterVal - 1]} moves`;
      break;
    case "move_damage_class_id":
      title = `${atkTypes[filterVal - 1]} moves`;
      break;
    case "move_effect_chance":
      title = "moves with effects";
      break;
    default:
      title = "all moves";
  }

  return (
    <Wrapper>
      <MoveList moveSet={rawData.moves} isLevel={false} title={title} />
      <MoveFilter
        filterSort={filterSort}
        setFilterSort={setFilterSort}
        openFilter={isOpen}
        setOpenFilter={setIsOpen}
        setPage={setPage}
      />
      <ListOptions>
        <Button
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
        >
          Filter/Sort
        </Button>
      </ListOptions>
    </Wrapper>
  );
};

export default AllMoves;
