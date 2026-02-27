import { useNavigate, Link } from "react-router-dom";
import {
  ContainerInputs,
  SignInButton,
  SignInContainer,
  SignInForm,
  SignInInput,
  SignInLink,
  SignInModal,
  SignInText,
  SignInTextContainer,
  SignInTitle,
  SignInWrapper,
} from "../style/SignIn.styled";

function SignIn({ setIsAuth }) {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <SignInModal>
          <SignInTitle>Вход</SignInTitle>

          <SignInForm onSubmit={handleLogin}>
            <ContainerInputs>
              <SignInInput type="text" name="login" placeholder="Эл. почта" />

              <SignInInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </ContainerInputs>

            <SignInButton type="submit">Войти</SignInButton>
          </SignInForm>
          <SignInTextContainer>
            <SignInText>Нужно зарегистрироваться?</SignInText>
            <SignInLink to="/sign-up">Регистрируйтесь здесь</SignInLink>
          </SignInTextContainer>
        </SignInModal>
      </SignInContainer>
    </SignInWrapper>
  );
}

export default SignIn;
