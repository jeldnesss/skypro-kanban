import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Card from "../components/Card/Card";
import PopExitModal from "../components/PopExit/PopExit";
import PopBrowse from "../components/PopBrowse/PopBrowse";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true",
  );
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="add-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
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
