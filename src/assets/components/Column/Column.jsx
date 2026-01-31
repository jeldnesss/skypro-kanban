import Card from "../Card/Card.jsx";
import { cards } from "../../../data.js";
import { ColumnTitle, MainColumn, ColumnCards } from "./Column.styled.js";

const Column = ({ title }) => {
  const columnCards = cards.filter((card) => card.status === title);

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
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
