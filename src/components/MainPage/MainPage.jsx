import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Outlet />
    </div>
  );
}
export default MainPage;
