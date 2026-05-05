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
    await addTask(user.token, task);
    const updatedTasks = await getTasks(user.token);
    setTasks(updatedTasks);
  };
  const updateTask = async (id, updatedData) => {
    await editTask(user.token, id, updatedData);
    const updatedTasks = await getTasks(user.token);
    setTasks(updatedTasks);
  };

  const removeTask = async (id) => {
    const updated = await deleteTask(user.token, id);
    setTasks(updated);
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
