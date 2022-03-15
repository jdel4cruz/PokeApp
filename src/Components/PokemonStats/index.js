import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//Helper functions
import {
  removeHyphen,
  capitalizeFirstLetterEachWord,
} from "../../HelperFunctions/HelperFunctions";

import { Wrapper } from "./PokemonStats.styles";

const PokemonStats = ({ stats }) => {
  if (stats == null) {
    return <div>loading</div>;
  }

  ChartJS.register(CategoryScale, LinearScale, BarElement);

  const data = {
    labels: stats.map((stat) => {
      const removedHyphen = removeHyphen(stat, "name");
      return capitalizeFirstLetterEachWord(removedHyphen);
    }),
    datasets: [
      {
        data: stats.map((stat) => stat.base_stat),
        backgroundColor: [
          "rgba(203, 167, 55, .5)",
          "rgba(229, 97, 95, .5)",
          "rgba(247, 155, 227, .5)",
          "rgba(99, 112, 238, .5)",
          "rgba(133, 224, 240, .5)",
          "rgba(93, 244, 102, .5)",
        ],
        borderColor: [
          "rgba(203, 167, 55, .8)",
          "rgba(229, 97, 95, .8)",
          "rgba(247, 155, 227, .8)",
          "rgba(99, 112, 238, .8)",
          "rgba(133, 224, 240, .8)",
          "rgba(93, 244, 102, .8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1,
    scales: {
      y: {
        beginsAtZero: true,
        suggestedMax: 150,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Wrapper>
      <h2>Stats:</h2>
      <Bar options={options} data={data} />
    </Wrapper>
  );
};

export default PokemonStats;
