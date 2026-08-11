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
import { useState } from "react";
import { signIn } from "../../services/auth";

function SignIn({ setIsAuth }) {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    try {
      const user = await signIn({ login, password });
      setIsAuth(true);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuth", "true");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <SignInModal>
          <SignInTitle>Вход</SignInTitle>

          <SignInForm onSubmit={handleLogin}>
            <ContainerInputs>
              <SignInInput
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />

              <SignInInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInputs>

            <SignInButton type="submit">Войти</SignInButton>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
