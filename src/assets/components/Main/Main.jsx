import { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";

const Main = () => {
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {loading ? (
              <p className="loader">Данные загружаются ...</p>
            ) : (
              <>
                <Column title="Без статуса" />
                <Column title="Нужно сделать" />
                <Column title="В работе" />
                <Column title="Тестирование" />
                <Column title="Готово" />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
