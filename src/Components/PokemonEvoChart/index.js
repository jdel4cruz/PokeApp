import { v4 as uuidv4 } from "uuid";

//Components
import EvoChartCell from "../EvoChartCell";
import PokemonNav from "../PokemonNav";

//Styles
import { Wrapper, EvoTier, ChartContainer } from "./PokemonEvoChart.styles";

const PokemonEvoChart = ({ evoTiers }) => {
  const generateCells = (tier) => {
    const cells = tier.map((pokemon) => {
      const { name, sprite, evoCondition, id } = pokemon;
      return (
        <EvoChartCell
          name={name}
          sprite={sprite}
          evoCondition={evoCondition}
          id={id}
          key={uuidv4()}
        />
      );
    });
    return cells;
  };

  return (
    <Wrapper>
      <PokemonNav />

      <ChartContainer length={evoTiers.length}>
        {evoTiers.map((tier) => (
          <EvoTier key={uuidv4()} length={evoTiers.length}>
            {generateCells(tier)}
          </EvoTier>
        ))}
      </ChartContainer>
    </Wrapper>
  );
};

export default PokemonEvoChart;
