import { useContext } from "react";
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTitleWrap,
  PopExitFormGroup,
  ExitYesBtn,
  ExitNoBtn,
} from "./PopExit.styled";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PopExitModal = () => {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();
  function handleExit(){
    logout();
    navigate("/sign-in");
  }
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitleWrap>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitleWrap>

          <PopExitFormGroup>
             <ExitYesBtn onClick={handleExit}>
              Да, выйти
            </ExitYesBtn>

            <ExitNoBtn>
              <a href="#">Нет, остаться</a>
            </ExitNoBtn>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopExitModal;
