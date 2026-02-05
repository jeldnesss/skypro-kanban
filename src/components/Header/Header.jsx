import { useState } from "react";
import PopUser from "../PopUser/PopUser.jsx";
import { HeaderBox, HeaderBlock, HeaderLogo, LogoImg, HeaderNav, HeaderBtn, HeaderUser } from "./Header.styled.js";
import { Container } from "../style/Container.styled.js";
const isDarkTheme = true;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderBox>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="/">
              <LogoImg src={isDarkTheme ? "/images/logo.png" : "/images/logo_dark.png"} alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtn className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtn>
            <HeaderUser
              href="#user-set-target"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
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
