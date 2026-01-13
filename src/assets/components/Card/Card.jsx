const Card = ({ theme, color, title, date }) => {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${color}`}>
            <p className={color}>{theme}</p>
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
