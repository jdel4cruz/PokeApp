import { type } from "@testing-library/user-event/dist/type";
import { v4 as uuidv4 } from "uuid";

//Styled
import { Wrapper, Chart, Cell } from "./TypeChart.styles";

const typeLabels = [
  {
    name: "NOR",
    color: "rgb(204,201,170)",
  },
  {
    name: "FIG",
    color: "rgb(213,103,35)",
  },
  {
    name: "FLY",
    color: "rgb(61,199,239)",
  },
  {
    name: "POI",
    color: "rgb(185,127,201)",
  },
  {
    name: "GRD",
    color: "rgb(171,152,66)",
  },
  {
    name: "ROC",
    color: "rgb(163,140,33)",
  },
  {
    name: "BUG",
    color: "rgb(114,159,63)",
  },
  {
    name: "GHO",
    color: "rgb(123,98,163)",
  },
  {
    name: "STE",
    color: "rgb(164,172,175)",
  },
  {
    name: "FIR",
    color: "rgb(253,125,36)",
  },
  {
    name: "WAT",
    color: "rgb(69,146,196)",
  },
  {
    name: "GRA",
    color: "rgb(155,204,80)",
  },
  {
    name: "ELE",
    color: "rgb(238,213,53)",
  },
  {
    name: "PSY",
    color: "rgb(243,102,185)",
  },
  {
    name: "ICE",
    color: "rgb(182,232,247)",
  },
  {
    name: "DRA",
    color: "rgb(112,56,248)",
  },
  {
    name: "DRK",
    color: "rgb(112,112,112)",
  },
  {
    name: "FAI",
    color: "rgb(253,185,233)",
  },
];

const TypeChart = ({ weakness, type1, type2 }) => {
  console.log(weakness);
  console.log(type1);
  console.log(type2);

  const damageColor = (value) => {
    switch (value) {
      case 0:
        return "rgb(0,0,0)";
      case 25:
        return "rgb(50,50,50)";
      case 50:
        return "rgb(100,100,100)";
      case 100:
        return "rgb(117,213,113)";
      case 200:
        return "rgb(230,134,46)";
      case 400:
        return "rgb(228,59,52)";
    }
  };

  return (
    <Wrapper>
      <h2>Weakness Chart</h2>
      <Chart>
        {typeLabels.slice(0, 9).map((type) => (
          <Cell backgroundColor={type.color} key={uuidv4()}>
            {type.name}
          </Cell>
        ))}

        {weakness.slice(0, 9).map((value) => (
          <Cell backgroundColor={damageColor(value)} key={uuidv4()}>
            {`${value / 100}x`}
          </Cell>
        ))}
      </Chart>
      <Chart>
        {typeLabels.slice(9, 18).map((type) => (
          <Cell backgroundColor={type.color} key={uuidv4()}>
            {type.name}
          </Cell>
        ))}
        {weakness.slice(9, 18).map((value) => (
          <Cell backgroundColor={damageColor(value)} key={uuidv4()}>
            {`${value / 100}x`}
          </Cell>
        ))}
      </Chart>
    </Wrapper>
  );
};

export default TypeChart;
