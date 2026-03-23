import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { useState } from "react";
import { addTask } from "../../services/kanban.js";

const PopNewCard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { setTasks } = useOutletContext();
  async function handleCreateCard(e) {
    e.preventDefault();
    if (!token) {
      return alert("вы не авторизованы");
    }
    if (!title.trim()) {
      setError("введите название задачи");
      return;
    }
    const task = {
      title: title || "Новая задача",
      topic: "Research",
      status: "Без статуса",
      description: description || "",
      date: "2024-01-07T16:26:18.179Z",
    };

    try {
      const newTask = await addTask(token, task);
      setTasks(newTask);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }
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
              <form
                className="pop-new-card__form form-new"
                onSubmit={handleCreateCard}
              >
                <div className="form-new__block">
                  <label className="subttl">Название задачи</label>
                  <input
                    className="form-new__input"
                    type="text"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-new__block">
                  <label className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button className="form-new__create _hover01" type="submit">
                  Создать задачу
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>

              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
