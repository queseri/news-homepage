import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./sass/main.scss";
import Article from "./components/Article";
import Aside from "./components/Aside";

function App() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(() => !menu);
  }

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-y");
    } else {
      document.body.classList.remove("overflow-y");
    }
  }, [menu]);

  return (
    <div className="app font-family">
      <Header menu={menu} handleMenu={handleMenu} />

      <main className="main">
        <Hero />
        <Article />
      </main>
      <Aside />
    </div>
  );
}

export default App;
