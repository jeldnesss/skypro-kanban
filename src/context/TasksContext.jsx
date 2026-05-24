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
    const updatedTasks = await addTask(user.token, task);

    setTasks(updatedTasks);
  };
  const updateTask = async (id, updatedData) => {
    const updatedTasks = await editTask(user.token, id, updatedData);

    setTasks(updatedTasks);
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
