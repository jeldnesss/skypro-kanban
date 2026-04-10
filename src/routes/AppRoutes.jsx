import { Routes, Route } from "react-router-dom";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import PopExitModal from "../components/PopExit/PopExit";
import PopBrowse from "../components/PopBrowse/PopBrowse";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="add-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
          <Route path="exit" element={<PopExitModal />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
