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
import LoadingThreeDots from "./Contents/LoadingThreeDots";

function App() {
  const [macs, setMacs] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [create, setCreate] = useState(false);

  () => {
    LocalStorageAndFuncs.CheckLocalStorageOrFetch(setMacs, loading, SetLoading);
  };

  useEffect(()=> {
    <MacList macs={macs} setMacs={setMacs} />
  }, [macs])

  return (
    <>
      <GlobalContext.Provider
        value={{ macs, setMacs, create, setCreate, loading, SetLoading }}
      >
        <Headers />
        {true ? <LoadingThreeDots value={{ loading }} /> : ""}
        <SearchBar value={{ create, setCreate }} />
        {create ? (
          <>
            <HeaderMacList />
            <CreateMac
              macs={macs}
              setMacs={setMacs}
              create={create}
              setCreate={setCreate}
            />
          </>
        ) : loading ? (
          <LoadingData />
        ) : (
          <>
            <HeaderMacList />
            <MacList macs={macs} setMacs={setMacs} />
          </>
        )}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
