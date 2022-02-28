import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//Styles
import {
  Wrapper,
  NavContainer,
  LogoContainer,
  Logo,
  StyledLink,
} from "./Header.styles";

//Images
const LogoImg =
  "https://fontmeme.com/permalink/220228/42265cafe99a4859e3a787b661dff437.png";

const Header = () => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <Logo src={LogoImg} />
      </Link>
    </LogoContainer>

    <NavContainer>
      <ul>
        <li key={uuidv4()}>
          <StyledLink to="/pokemon">Pokemon</StyledLink>
        </li>
        <li key={uuidv4()}>
          <StyledLink to="/items">Items</StyledLink>
        </li>
        <li key={uuidv4()}>
          <StyledLink to="/moves">Moves</StyledLink>
        </li>
        <li key={uuidv4()}>
          <StyledLink to="/abilities">Abilities</StyledLink>
        </li>
      </ul>
    </NavContainer>
  </Wrapper>
);

export default Header;
