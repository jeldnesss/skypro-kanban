import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect } from "react";
import { getTasks } from "../../services/kanban";

function MainPage({ tasks, setTasks }) {
  const token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
  useEffect(() => {
    if (token) {
      getTasks(token)
        .then((data) => setTasks(data))
        .catch((err) => console.log(err));
    }
  }, [token]);
  return (
    <div className="wrapper">
      <Header />
      <Main tasks={tasks} />
      <Outlet context={{ tasks, setTasks }} />
    </div>
  );
}
export default MainPage;
