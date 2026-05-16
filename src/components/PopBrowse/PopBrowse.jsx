import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import TasksContext from '../../context/TasksContext';
import Calendar from '../Calendar/Calendar.jsx';

import { toast } from 'react-toastify';

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const { tasks, removeTask } = useContext(TasksContext);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    status: '',
  });
  const [errorDel, setErrorDel] = useState('');
  const [errorSave, setErrorSave] = useState('');

  useEffect(() => {
    const currTask = tasks.find((t) => t._id === id);
    setTask(currTask);
    if (currTask) {
      setFormData({
        title: currTask.title,
        description: currTask.description,
        date: currTask.date || '',
        status: currTask.status || 'Без статуса',
      });
    }
  }, [tasks, id]);

  async function handleDelTask() {
    if (!window.confirm('удалить задачу?')) return;

    try {
      await removeTask(id);
      navigate('/');
      toast.success('Задача удалена');
    } catch (err) {
      setErrorDel(err.response?.message || 'Ошибка сервера');
      toast.error('Не удалось удалить');
    }
  }
  async function handleCancel() {
    setIsEdit(false);
  }
  const { updateTask } = useContext(TasksContext);

  async function handleSave() {
    try {
      await updateTask(id, formData);
      setIsEdit(false);
      toast.success('Задача обновлена');
    } catch (err) {
      setErrorSave(err.response?.message || 'Ошибка сервера');
      toast.error('Ошибка при обновлении');
    }
  }
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              {isEdit ? (
                <input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              ) : (
                <h3 className="pop-browse__ttl">{task?.title}</h3>
              )}
              <div className="categories__theme theme-top _green _active-category">
                <p className="_green">{task?.topic || 'Web Design'}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {!isEdit ? (
                  <div className="status__theme _gray">
                    <p className="_gray">{task?.status}</p>
                  </div>
                ) : (
                  [
                    'Без статуса',
                    'Нужно сделать',
                    'В работе',
                    'Тестирование',
                    'Готово',
                  ].map((status) => (
                    <div
                      key={status}
                      className={`status__theme ${
                        formData.status === status ? '_gray' : ''
                      }`}
                      onClick={() => setFormData({ ...formData, status })}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="">{status}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEdit}
                    value={
                      isEdit ? formData.description : task?.description || ''
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar
                initialDate={formData.date}
                onSelectDate={(date) => setFormData({ ...formData, date })}
              />
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task?.topic || 'Web Design'}</p>
              </div>
            </div>

            <div className={`pop-browse__btn-browse ${isEdit ? '_hide' : ''}`}>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={() => setIsEdit(true)}
                >
                  Редактировать задачу
                </button>

                <button
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelTask}
                >
                  Удалить задачу
                </button>
                {errorDel && <p className="error">{errorDel}</p>}
              </div>
              <Link className="btn-browse__close _btn-bg _hover01" to="/">
                Закрыть
              </Link>
            </div>

            <div className={`pop-browse__btn-edit ${!isEdit ? '_hide' : ''}`}>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleSave}
                >
                  Сохранить
                </button>
                {errorSave && <p className="error">{errorSave}</p>}
                <button
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleCancel}
                >
                  Отменить
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  onClick={handleDelTask}
                >
                  Удалить задачу
                </button>
                {errorDel && <p className="error">{errorDel}</p>}
              </div>
              <Link className="btn-edit__close _btn-bg _hover01" to="/">
                Закрыть
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
