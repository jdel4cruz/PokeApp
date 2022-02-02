//Styles
import { Wrapper, Img } from "./Image.styles";

const Image = ({ pokemonImg }) => (
  <Wrapper>
    <Img src={pokemonImg} />
  </Wrapper>
);

export default Image;
