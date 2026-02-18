import "./App.css";

import { GlobalStyles } from "./components/style/GlobalStyles.js";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
