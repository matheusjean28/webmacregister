import "./App.css";
import { useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import { GlobalContext } from "./Context/GlobalContext";
import LocalStorageAndFuncs from "./Context/LocalStorageAndFuncs";

function App() {
  LocalStorageAndFuncs.CheckLocalStorageAndFetch();
  const macList = [
    { model: "Model", mac: "MAC1", problem: true, remoteAccess: false },
    { model: "Model2", mac: "MAC2", problem: false, remoteAccess: true },
  ];

  const [macs, setMacs] = useState(macList);

  return (
    <>
      <GlobalContext.Provider value={{ macs }}>
        <Headers />
        <SearchBar />
        <HeaderMacList />
        <MacList value={{ macs }} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
