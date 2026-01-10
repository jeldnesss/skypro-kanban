import Calendar from "../Calendar/Calendar.jsx";
const PopNewCard = () => {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <htmlForm
                className="pop-new-card__htmlForm htmlForm-new"
                id="htmlFormNewCard"
                action="#"
              >
                <div className="htmlForm-new__block">
                  <label htmlFor="htmlFormTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="htmlForm-new__input"
                    type="text"
                    name="name"
                    id="htmlFormTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="htmlForm-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="htmlForm-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </htmlForm>
              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="htmlForm-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopNewCard;
