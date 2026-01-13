import Card from "../Card/Card.jsx";

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        <Card
          theme="Web Design"
          color="_orange"
          title="Название задачи"
          date="30.10.23"
        />

        <Card
          theme="Research"
          color="_green"
          title="Название задачи"
          date="30.10.23"
        />
      </div>
    </div>
  );
};

export default Column;
