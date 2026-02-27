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
  function handleExit(e) {
    e.preventDefault();
    localStorage.removeItem("isAuth");
  }
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
      <PopUserBtn onClick={handleExit} type="button" className="_hover03">
        <PopUserBtnLink to="/sign-in">Выйти</PopUserBtnLink>
      </PopUserBtn>
    </PopUserHeader>
  );
};

export default PopUser;
