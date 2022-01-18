//Stuff
import { v4 as uuidv4 } from "uuid";

//Routing
import { Link } from "react-router-dom";

//Components
import Accordion from "../Accordion";

//Styles
import { Wrapper, StyledLink } from "./Screen.styles";

//Helper Functions
import { keyGenerator } from "../../HelperFunctions";

const Screen = () => {
  console.log(data);

  return (
    <Wrapper>
      <ul>
        <li key={uuidv4()}>
          <Accordion title="Version" data={data} classDesc="screen-accordion" />
        </li>
        <li key={uuidv4()}>
          <StyledLink to="/pokemon">Pokemon</StyledLink>
        </li>
      </ul>
    </Wrapper>
  );
};

const data = [
  {
    title: "Generation",
    content: (
      <ul>
        <li>Gen 1</li>
        <li>Gen 2</li>
        <li>Gen 3</li>
        <li>Gen 4</li>
        <li>Gen 5</li>
        <li>Gen 6</li>
        <li>Gen 7</li>
        <li>Gen 8</li>
      </ul>
    ),
  },
];

keyGenerator(data);

export default Screen;
