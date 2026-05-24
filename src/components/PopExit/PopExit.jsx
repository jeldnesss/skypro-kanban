import { useContext } from 'react';
import {
  PopExitModal,
  PopExitContainer,
  PopExitBlock,
  PopExitTitleWrap,
  PopExitFormGroup,
  ExitYesBtn,
  ExitNoBtn,
} from './PopExit.styled';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const PopExit = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleExit() {
    logout();
    navigate('/sign-in');
  }
  return (
    <PopExitModal id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitleWrap>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitleWrap>

          <PopExitFormGroup>
            <ExitYesBtn onClick={handleExit}>Да, выйти</ExitYesBtn>

            <ExitNoBtn>
              <Link to="/">Нет, остаться</Link>
            </ExitNoBtn>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitModal>
  );
};

export default PopExit;
