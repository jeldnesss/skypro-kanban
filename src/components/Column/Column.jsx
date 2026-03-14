import Card from "../Card/Card.jsx";
import {
  ColumnTitle,
  MainColumn,
  ColumnCards,
  ColumnHeadTitle,
} from "./Column.styled.js";
import { useEffect, useState } from "react";
import { getTasks } from "../../services/kanban.js";

const Column = ({ title }) => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
  useEffect(() => {
    if (token) {
      getTasks(token)
        .then((data) => setTasks(data))
        .catch((err) => console.log(err));
    }
  }, [token]);
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
