import { useContext } from 'react';
import {
  PopUserBtn,
  PopUserBtnLink,
  PopUserHeader,
  PopUserMail,
  PopUserName,
  PopUserTheme,
  ThemeInput,
  ThemeText,
} from './PopUser.styled';
import AuthContext from '../../context/AuthContext';
import ThemeContext from '../../context/ThemeContext';

const PopUser = ({ isOpen }) => {
  const { logout, user } = useContext(AuthContext);
  function handleExit(e) {
    e.preventDefault();
    logout();
  }
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <PopUserHeader
      id="user-set-target"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      {<a href="">x</a>}
      <PopUserName>{user?.name}</PopUserName>
      <PopUserMail>{user?.login}</PopUserMail>
      <PopUserTheme>
        <ThemeText>Темная тема</ThemeText>
        <ThemeInput
          type="checkbox"
          className="checkbox"
          name="checkbox"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </PopUserTheme>
      <PopUserBtn onClick={handleExit} type="button" className="_hover03">
        <PopUserBtnLink to="/sign-in">Выйти</PopUserBtnLink>
      </PopUserBtn>
    </PopUserHeader>
  );
};

export default PopUser;
