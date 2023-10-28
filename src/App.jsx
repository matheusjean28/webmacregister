import "./App.css";
import { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import LoadingData from "./Contents/LoadingData.jsx";
import { GlobalContext } from "./Context/GlobalContext";
import LocalStorageAndFuncs from "./Context/LocalStorageAndFuncs";
import CreateMac from "./Contents/CreateMac";

function App() {
  const [macs, setMacs] = useState(
    JSON.parse(localStorage.getItem("macList")) ||
    LocalStorageAndFuncs.CheckLocalStorageAndFetch(setMacs, SetLoading)
  );
  const [loading, SetLoading] = useState(true);

  const [create, setCreate] = useState(false);

  useEffect(() => {
    localStorage.setItem("macList", JSON.stringify(macs));
  }, [macs]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = LocalStorageAndFuncs.FetchDataFromAPI();
        setMacs(data);
        SetLoading(false);
      } catch (error) {
        SetLoading(false);
        throw new console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{ macs, create, setCreate, loading, SetLoading }}
      >
        <Headers />
        <SearchBar value={{ create, setCreate }} />
        {create ? (
          <>
            <HeaderMacList />
            <CreateMac />
          </>
        ) : loading ? (
          <LoadingData />
        ) : (
          <>
            <HeaderMacList />
            <MacList value={{ macs, create, setCreate }} />
          </>
        )}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
