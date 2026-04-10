import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { addTask, deleteTask, getTasks } from "../services/kanban";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user?.token) return;

    getTasks(user.token)
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, [user]);

  const createTask = async (task) => {
    const newTask = await addTask(user.token, task);
    setTasks(newTask);
  };
  const removeTask = async (id) => {
    const updated = await deleteTask(user.token, id);
    setTasks(updated);
  };
  return (
    <TasksContext.Provider value={{ tasks, setTasks, createTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
}
export default TasksContext;
