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
import { Link } from 'react-router-dom';

const PopUser = ({ isOpen }) => {
  const { user } = useContext(AuthContext);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <PopUserHeader
      id="user-set-target"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      
        <Link to="/" className="pop-user__close">
          x
        </Link>
      
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
      <PopUserBtn type="button" className="_hover03">
        <PopUserBtnLink to="/exit">Выйти</PopUserBtnLink>
      </PopUserBtn>
    </PopUserHeader>
  );
};

export default PopUser;
