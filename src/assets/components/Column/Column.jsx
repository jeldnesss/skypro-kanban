import Card from "../Card/Card.jsx";
import { cards } from "../../../data.js";

const Column = ({ title }) => {
  const columnCards = cards.filter((card) => card.status === title);

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {columnCards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
