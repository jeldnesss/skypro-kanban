import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTitleWrap,
  PopExitFormGroup,
  ExitYesBtn,
  ExitNoBtn,
} from "./PopExit.styled";

const PopExitModal = () => {
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitleWrap>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitleWrap>

          <PopExitFormGroup>
            <ExitYesBtn>
              <a href="modal/signin.html">Да, выйти</a>
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
