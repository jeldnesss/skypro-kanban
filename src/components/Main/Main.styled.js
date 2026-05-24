import styled, { keyframes } from 'styled-components';

export const MainMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`;
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;
const spin = keyframes`
 0% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  6.25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  12.5% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  18.75% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  31.25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  37.5% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  43.75% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px #5f797d, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px transparent;
  }
  50% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px #5f797d, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  56.25% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px #5f797d, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  62.5% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px #5f797d, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  68.75% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px #5f797d, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  75% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px #5f797d, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  81.25% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px #5f797d, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  87.5% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px #5f797d,
      -10px -30px #5f797d;
  }
  93.75% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px #5f797d;
  }
  100% {
    box-shadow: 
      0px -30px #5f797d, 
      10px -30px #5f797d, 
      20px -20px #5f797d, 
      30px -10px #5f797d, 
      30px 0px #5f797d, 
      30px 10px #5f797d, 
      20px 20px #5f797d, 
      10px 30px #5f797d, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
`;
export const Loader = styled.div`
  animation: ${spin} 1s linear infinite;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -5px;
`;
