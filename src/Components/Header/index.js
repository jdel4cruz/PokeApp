import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//Styles
import {
  Wrapper,
  NavContainer,
  LogoContainer,
  Logo,
  StyledLink,
  NavMid,
  NavButton,
  NavMenu,
  NavMenuItem,
  Overlay,
} from "./Header.styles";

//Images
const LogoImg =
  "https://fontmeme.com/permalink/220228/42265cafe99a4859e3a787b661dff437.png";

const Header = () => {
  const [isOpenCurrent, setIsOpenCurrent] = useState({
    isOpen: false,
    isCurrent: null,
  });
  console.log(isOpenCurrent.isOpen);
  console.log(isOpenCurrent.isCurrent);

  const handleOnClick = (id) => {
    setIsOpenCurrent({ isOpen: false, isCurrent: id });
  };

  return (
    <Wrapper>
      <LogoContainer>
        <Link to="/" onClick={() => handleOnClick(null)}>
          <Logo src={LogoImg} />
        </Link>
      </LogoContainer>

      <NavButton
        onClick={() =>
          setIsOpenCurrent((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
          }))
        }
        isOpen={isOpenCurrent.isOpen}
      >
        <NavMid isOpen={isOpenCurrent.isOpen} />
      </NavButton>

      <NavMenu isOpen={isOpenCurrent.isOpen}>
        <ul>
          <NavMenuItem
            key={"pokemon"}
            id={"pokemon"}
            current={isOpenCurrent.isCurrent}
          >
            <StyledLink
              to="/pokemon"
              onClick={() => handleOnClick("pokemon")}
              id={"pokemon"}
              current={isOpenCurrent.isCurrent}
            >
              Pokemon
            </StyledLink>
          </NavMenuItem>
          <NavMenuItem
            key={"items"}
            id={"items"}
            current={isOpenCurrent.isCurrent}
          >
            <StyledLink
              to="/items"
              onClick={() => handleOnClick("items")}
              id={"items"}
              current={isOpenCurrent.isCurrent}
            >
              Items
            </StyledLink>
          </NavMenuItem>
          <NavMenuItem
            key={"moves"}
            id={"moves"}
            current={isOpenCurrent.isCurrent}
          >
            <StyledLink
              to="/moves"
              onClick={() => handleOnClick("moves")}
              id={"moves"}
              current={isOpenCurrent.isCurrent}
            >
              Moves
            </StyledLink>
          </NavMenuItem>
          <NavMenuItem
            key={"abilities"}
            id={"abilities"}
            current={isOpenCurrent.isCurrent}
          >
            <StyledLink
              to="/abilities"
              onClick={() => handleOnClick("abilities")}
              id={"abilities"}
              current={isOpenCurrent.isCurrent}
            >
              Abilities
            </StyledLink>
          </NavMenuItem>
        </ul>
      </NavMenu>

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

      <Overlay isOpen={isOpenCurrent.isOpen} />
    </Wrapper>
  );
};

export default Header;
