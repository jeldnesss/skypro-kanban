import { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";
import { MainBlock, MainContent, MainMain } from "./Main.styled.js";
import { Container } from "../style/Container.styled.js";
const Main = ({ tasks }) => {
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
                <Column title="Без статуса" tasks={tasks} />
                <Column title="Нужно сделать" tasks={tasks} />
                <Column title="В работе" tasks={tasks} />
                <Column title="Тестирование" tasks={tasks} />
                <Column title="Готово" tasks={tasks} />
              </>
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainMain>
  );
};

export default Main;
