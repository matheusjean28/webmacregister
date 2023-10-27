import "./App.css";
import { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const initialMacs = JSON.parse(localStorage.getItem("macList")) || [];

  const [macs, setMacs] = useState(initialMacs);

  var [create, setCreate] = useState(false);

  useEffect(() => {
    localStorage.setItem("macList", JSON.stringify(macs));
  }, [macs]);

  return (
    <>
      <GlobalContext.Provider value={{ macs, create, setCreate }}>
        <Headers />
        <SearchBar value={{ create, setCreate }} />
        <HeaderMacList />
        <MacList value={{ macs, create, setCreate }} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
