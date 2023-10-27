import "./App.css";
import { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import LoadingData from './Contents/LoadingData.jsx'
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const initialMacs = JSON.parse(localStorage.getItem("macList")) || [];
  const [macs, setMacs] = useState(initialMacs);
  const [create, setCreate] = useState(false);
  const [loading, SetLoading] =useState(true);
  useEffect(() => {
    localStorage.setItem("macList", JSON.stringify(macs));
  }, [macs]);

  return (
    <>
      <GlobalContext.Provider value={{ macs, create, setCreate }}>
        <Headers />
        <SearchBar value={{ create, setCreate }} />
       { loading ? <LoadingData/> :  <><HeaderMacList /><MacList value={{ macs, create, setCreate }} /></>}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
