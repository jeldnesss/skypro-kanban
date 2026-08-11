import { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";
import { MainBlock, MainContent, MainMain } from "./Main.styled.js";
import { Container } from "../style/Container.styled.js";
const Main = () => {
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <MainMain>
      <Container>
        <MainBlock>
          <MainContent>
            {loading ? (
              <p className="loader">Данные загружаются ...</p>
            ) : (
              <>
                <Column title="Без статуса" />
                <Column title="Нужно сделать" />
                <Column title="В работе" />
                <Column title="Тестирование" />
                <Column title="Готово" />
              </>
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainMain>
  );
};

export default Main;
