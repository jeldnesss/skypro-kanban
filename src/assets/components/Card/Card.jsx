const Card = ({ topic, title, date, status }) => {
  const getColorClass = () => {
    switch (status) {
      case "Готово":
        return "_green";
      case "В работе":
        return "_orange";
      case "Нужно сделать":
      case "Тестирование":
        return "_purple";
      default:
        return "_gray";
    }
  };
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${getColorClass()}`}>
            <p>{topic}</p>
          </div>

          <a href="#popBrowse">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>

        <div className="card__content">
          <h3 className="card__title">{title}</h3>

          <div className="card__date">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
