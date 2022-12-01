import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import { ModList } from "./components/ModList";
import { ModsLoader } from "./components/ModsLoader";

function App() {
  const [modList, setModList] = useState([]);

  useEffect(() => {
    window.modlist.getMods().then((mods) => {
      setModList(mods);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Curator!</h1>
      </header>
      <div className="modList">
        {modList.length > 0 ? <ModList mods={modList} /> : <ModsLoader />}
      </div>
    </div>
  );
}

export default App;
