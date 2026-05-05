import { Link, useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar.jsx';
import { useContext, useState } from 'react';

import TasksContext from '../../context/TasksContext.jsx';
import AuthContext from '../../context/AuthContext.jsx';
import { toast } from 'react-toastify';

const PopNewCard = () => {
  const navigate = useNavigate();

  const { addTask } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');

  async function handleCreateCard(e) {
    e.preventDefault();
    if (!user) {
      return alert('вы не авторизованы');
    }
    if (!title.trim()) {
      setError('введите название задачи');
      toast.warning('Введите название задачи');
      return;
    }
    const task = {
      title: title || 'Новая задача',
      topic: 'Research',
      status: 'Без статуса',
      description: description || '',
      date: selectedDate || new Date().toISOString(),
    };

    try {
      await addTask(task);
      navigate('/');
    } catch (err) {
      setError(err.message);
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </form>

              <Calendar onSelectDate={setSelectedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
