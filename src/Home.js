import styled from "styled-components";

//Components
import Header from "./Components/Header";
import HeroImage from "./Components/HeroImage";
import HeroTitle from "./Components/HeroTitle";
import HeroText from "./Components/HeroText";

//Images
import Yamper from "./Images/Yamper_Alt_Pose.png";
import Snorlax from "./Images/Gigantamax_Snorlax_Art.png";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  align-items: center;
  gap: 2rem 0;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: var(--maxWidth);
  align-items: center;
`;

const Home = () => (
  <Wrapper>
    <Body>
      <HeroTitle />
      <HeroText />
      <HeroImage RotatedImg={Yamper} StaticImg={Snorlax}></HeroImage>
    </Body>
  </Wrapper>
);
export default Home;
