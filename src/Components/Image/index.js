//Styles
import { Wrapper, Img } from "./Image.styles";

const Image = ({ pokemonImg, background = "" }) => (
  <Wrapper background={background}>
    <Img src={pokemonImg} />
  </Wrapper>
);

export default Image;
