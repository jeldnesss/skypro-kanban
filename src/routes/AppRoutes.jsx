import { Routes, Route } from "react-router-dom";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import PopExitModal from "../components/PopExit/PopExit";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useState } from "react";

function AppRoutes({ isAuth, setIsAuth }) {
  const [tasks, setTasks] = useState([]);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage tasks={tasks} setTasks={setTasks}/>}>
          <Route path="add-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse setTasks={setTasks}/>} />
          <Route path="exit" element={<PopExitModal />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignIn setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
