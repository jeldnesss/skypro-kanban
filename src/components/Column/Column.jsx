import Card from "../Card/Card.jsx";
import { cards } from "../../data.js";
import {
  ColumnTitle,
  MainColumn,
  ColumnCards,
  ColumnHeadTitle,
} from "./Column.styled.js";

const Column = ({ title }) => {
  const columnCards = cards.filter((card) => card.status === title);

  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnHeadTitle>{title}</ColumnHeadTitle>
      </ColumnTitle>

      <ColumnCards>
        {columnCards.map((card) => (
          <Card
            key={card.id}
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
