import { createContext, useContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { addTask, deleteTask, getTasks, editTask } from '../services/kanban';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user?.token) return;

    getTasks(user.token)
      .then((data) => setTasks(data))
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, [user]);

  const addTaskHandler = async (task) => {
    const created = await addTask(user.token, task);

    const safeTask = {
      _id: created._id,
      title: task.title,
      description: task.description,
      status: task.status,
      topic: task.topic,
      date: task.date,
    };

    setTasks((prev) => [...prev, safeTask]);
  };
  const updateTask = async (id, updatedData) => {
    await editTask(user.token, id, updatedData);

    setTasks((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, ...updatedData } : task,
      ),
    );
  };

  const removeTask = async (id) => {
    await deleteTask(user.token, id);

    setTasks((prev) => prev.filter((task) => task._id !== id));
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        addTask: addTaskHandler,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
export default TasksContext;
