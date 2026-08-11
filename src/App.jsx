import "./App.css";
import Header from "./components/Header/Header.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Main from "./components//Main/Main.jsx";
import PopExitModal from "./components/PopExit/PopExit.jsx";
import { GlobalStyles } from "./components/style/GlobalStyles.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopExitModal />

        <PopNewCard />

        <PopBrowse />

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
