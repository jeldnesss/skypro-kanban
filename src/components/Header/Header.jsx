import { useState } from "react";
import { Link } from "react-router-dom";
import PopUser from "../PopUser/PopUser.jsx";
import {
  HeaderBox,
  HeaderBlock,
  HeaderLogo,
  LogoImg,
  HeaderNav,
  HeaderBtn,
  HeaderUser,
} from "./Header.styled.js";
import { Container } from "../style/Container.styled.js";

const isDarkTheme = true;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderBox>
      <Container>
        <HeaderBlock>


          <HeaderLogo as={Link} to="/">
            <LogoImg
              src={isDarkTheme ? "/images/logo.png" : "/images/logo_dark.png"}
              alt="logo"
            />
          </HeaderLogo>

          <HeaderNav>


            <HeaderBtn as={Link} to="/add-card">
              Создать новую задачу
            </HeaderBtn>

            <HeaderUser
              as="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              Ivan Ivanov
            </HeaderUser>

            <PopUser isOpen={isOpen} />

          </HeaderNav>

        </HeaderBlock>
      </Container>
    </HeaderBox>
  );
};

export default Header;
