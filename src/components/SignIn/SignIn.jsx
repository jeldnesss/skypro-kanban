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
import { useContext, useState } from "react";
import { signIn } from "../../services/auth";
import AuthContext from "../../context/AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if(!loginInput || !password){
      setError("Введите логин или пароль");
      return;
    }
    try {
      const user = await signIn({ login: loginInput, password });
      login(user);
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
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                autoComplete="username"
              />

              <SignInInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="password"
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
