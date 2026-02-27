import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignInContainer = styled.div``;

export const SignInModal = styled.div`
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  padding: 50px 60px;
  width: 368px;
  height: 329px;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const SignInTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000;
`;
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SignInInput = styled.input`
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  padding: 8px 10px;
  width: 100%;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #94a6be;
`;

export const SignInButton = styled.button`
  border-radius: 4px;
  width: 100%;
  height: 30px;
  background-color: #565eef;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.01em;
  text-align: center;
  color: #fff;
`;

const authTextStyles = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(148, 166, 190, 0.4);
`;

export const SignInText = styled.p`
  ${authTextStyles}
`;

export const SignInLink = styled(Link)`
  ${authTextStyles}
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
export const SignInTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;