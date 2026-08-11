import { useEffect, useState } from "react";
import "./App.css";

import { GlobalStyles } from "./components/style/GlobalStyles.js";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    if (auth === "true") {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
}

export default App;
