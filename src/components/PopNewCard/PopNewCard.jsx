import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";

const PopNewCard = () => {
  return (
    <div className="pop-new-card">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new">
                <div className="form-new__block">
                  <label className="subttl">Название задачи</label>
                  <input
                    className="form-new__input"
                    type="text"
                    placeholder="Введите название задачи..."
                  />
                </div>

                <div className="form-new__block">
                  <label className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <button className="form-new__create _hover01">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
