//Images
import ErrorImg from "../../Images/G-Max_Cinderace_Artwork.png";

//Styles
import { Wrapper, HeroImage, HeroText } from "./ErrorPage.styles";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <HeroText>
        <p>Sorry an error has occurred!</p>
        <p>
          This may be due to the site failing to connect to the API that
          provides the data, or the API lacking information needed to generate a
          specific component.
        </p>
      </HeroText>
      <HeroImage src={ErrorImg}></HeroImage>
    </Wrapper>
  );
};
