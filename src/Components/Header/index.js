import { Link } from "react-router-dom";

//Styles
import { Wrapper, NavContainer, LogoContainer, Logo } from "./Header.styles";

//Images
const LogoImg =
  "https://fontmeme.com/permalink/220118/faa67ecf8375f989aaedde74d5c61dc7.png";

const Header = () => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <Logo src={LogoImg} />
      </Link>
    </LogoContainer>

    <div>SearchBar Here</div>
    <NavContainer>taco</NavContainer>
  </Wrapper>
);

export default Header;
