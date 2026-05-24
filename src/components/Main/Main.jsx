import { useState, useEffect, useContext } from 'react';
import Column from '../Column/Column.jsx';
import { Loader, MainBlock, MainContent, MainMain } from './Main.styled.js';
import { Container } from '../style/Container.styled.js';
import TasksContext from '../../context/TasksContext.jsx';
const Main = () => {
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const { tasks } = useContext(TasksContext);
  return (
    <MainMain>
      <Container>
        <MainBlock>
          <MainContent>
            {loading ? (
              <Loader />
            ) : tasks.length === 0 ? (
              <p className="empty-tasks">Новых задач нет</p>
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
