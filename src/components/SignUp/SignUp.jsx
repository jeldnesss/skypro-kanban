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

function SignUp({ setIsAuth }) {
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <SignInModal>
          <SignInTitle>Регистрация</SignInTitle>

          <SignInForm onSubmit={handleSignUp}>
            <ContainerInputs>
              <SignInInput type="text" name="first-name" placeholder="Имя" />

              <SignInInput type="text" name="login" placeholder="Эл. почта" />

              <SignInInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </ContainerInputs>

            <SignInButton type="button" onClick={() => navigate("/sign-in")}>
              Зарегистрироваться
            </SignInButton>

            <SignInTextContainer>
              <SignInText>
                Уже есть аккаунт?{" "}
                <SignInLink to="/sign-in">Войдите здесь</SignInLink>
              </SignInText>
            </SignInTextContainer>
          </SignInForm>
        </SignInModal>
      </SignInContainer>
    </SignInWrapper>
  );
}

export default SignUp;
