//Styles
import { Wrapper, Rotated, Static } from "./HeroImage.styles";

const HeroImage = ({ RotatedImg, StaticImg }) => (
  <Wrapper>
    <Rotated src={RotatedImg}></Rotated>
    <Static src={StaticImg}></Static>
  </Wrapper>
);

export default HeroImage;
