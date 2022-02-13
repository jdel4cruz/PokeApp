import { Chart } from "react-chartjs-2";
import { v4 as uuidv4 } from "uuid";

//Components
import EvoChartCell from "../EvoChartCell";
import PokemonNav from "../PokemonNav";

//Styles
import { Wrapper, EvoTier, ChartContainer } from "./PokemonEvoChart.styles";

const PokemonEvoChart = ({ evoTiers }) => {
  console.log(evoTiers.length);
  return (
    <Wrapper>
      <PokemonNav />

      <ChartContainer length={evoTiers.length}>
        {evoTiers.map((tier) => (
          <EvoTier key={uuidv4()} length={evoTiers.length}>
            {tier.map((pokemon) => {
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
            })}
          </EvoTier>
        ))}
      </ChartContainer>
    </Wrapper>
  );
};

export default PokemonEvoChart;
