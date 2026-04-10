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
import { signUp } from "../../services/auth";
import AuthContext from "../../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    setError("");
    try {
      const user = await signUp({ loginInput, name, password });
      register(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <SignInModal>
          <SignInTitle>Регистрация</SignInTitle>

          <SignInForm onSubmit={handleSignUp}>
            <ContainerInputs>
              <SignInInput
                type="text"
                name="first-name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <SignInInput
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
              />

              <SignInInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInputs>

            <SignInButton type="submit">Зарегистрироваться</SignInButton>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
