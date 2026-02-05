import {
  PopUserBtn,
  PopUserBtnLink,
  PopUserHeader,
  PopUserMail,
  PopUserName,
  PopUserTheme,
  ThemeInput,
  ThemeText,
} from "./PopUser.styled";

const PopUser = ({ isOpen }) => {
  return (
    <PopUserHeader
      id="user-set-target"
      style={{ display: isOpen ? "block" : "none" }}
    >
      {<a href="">x</a>}
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <ThemeText>Темная тема</ThemeText>
        <ThemeInput type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserBtn type="button" className="_hover03">
        <PopUserBtnLink href="#popExit">Выйти</PopUserBtnLink>
      </PopUserBtn>
    </PopUserHeader>
  );
};

export default PopUser;
