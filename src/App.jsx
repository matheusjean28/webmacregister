import "./App.css";
import { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import { GlobalContext } from "./Context/GlobalContext";
import LocalStorageAndFuncs from "./Context/LocalStorageAndFuncs";

function App() {
  LocalStorageAndFuncs.CheckLocalStorageAndFetch();
  const [macs, setMacs] = useState(localStorage.getItem("macList") || LocalStorageAndFuncs.FetchDataFromAPI((setMacs)) );
  const macList = [
    { model: "Model", mac: "MAC1", problem: true, remoteAccess: false },
    { model: "Model2", mac: "MAC2", problem: false, remoteAccess: true },
  ];

  var [create, setCreate] = useState(false);

  useEffect(() => {
    localStorage.setItem("macList", macs);
  }, [macs]);

  return (
    <>
      <GlobalContext.Provider value={{ macs, create, setCreate }}>
        <Headers />
        <SearchBar value={{create, setCreate }}/>
        <HeaderMacList />
        <MacList value={{ macs, create, setCreate }} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
