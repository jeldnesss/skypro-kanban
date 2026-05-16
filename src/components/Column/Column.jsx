import { useContext } from 'react';
import Card from '../Card/Card.jsx';
import {
  ColumnTitle,
  MainColumn,
  ColumnCards,
  ColumnHeadTitle,
  ColumnNoTasks,
} from './Column.styled.js';
import TasksContext from '../../context/TasksContext.jsx';

const Column = ({ title }) => {
  const { tasks } = useContext(TasksContext);
  const columnCards = tasks.filter((task) => task.status === title);

  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnHeadTitle>{title}</ColumnHeadTitle>
      </ColumnTitle>

      <ColumnCards>
        {columnCards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
};

export default Column;
