import "./App.css";
import Header from "./assets/components/Header/Header.jsx";
import PopNewCard from "./assets/components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./assets/components/PopBrowse/PopBrowse.jsx";
import Main from "./assets/components//Main/Main.jsx";
import { GlobalStyles } from "./assets/components/style/GlobalStyles.js";  

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__htmlForm" id="htmlFormExit" action="#">
                <div className="pop-exit__htmlForm-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PopNewCard />

        <PopBrowse />

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
