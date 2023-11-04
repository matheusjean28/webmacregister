import React, { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import LoadingData from "./Contents/LoadingData";
import { GlobalContext } from "./Context/GlobalContext";
import LocalStorageAndFuncs from "./Context/LocalStorageAndFuncs";
import CreateMac from "./Contents/CreateMac";
import LoadingThreeDots from "./Contents/LoadingThreeDots";
import CreateDeviceModel from "./Contents/CreateDeviceModel";

function App() {
  const [macs, setMacs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [create, setCreate] = useState(false);
  const [createModel, setCreateModel] = useState(false);

  useEffect(() => {
    LocalStorageAndFuncs.CheckLocalStorageOrFetch(setMacs, loading, setLoading);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ createModel, setCreateModel, macs, setMacs, create, setCreate, loading, setLoading }}
    >
      <Headers />
      {loading ? <LoadingThreeDots /> : ""}
      {createModel ? (
        <>
          <SearchBar value={{ create, setCreate, createModel, setCreateModel }} />
          <CreateDeviceModel />

        </>
      ) : (
        <>
          <SearchBar value={{ create, setCreate }} />
          {create ? (
            <>
              <CreateMac
                macs={macs}
                setMacs={setMacs}
                create={create}
                setCreate={setCreate}
              />

            </>
          ) : false ? (
            <LoadingData />
          ) : (
            <>
              <HeaderMacList />
              <MacList macs={macs} setMacs={setMacs} />
            </>
          )}
        </>
      )}
    </GlobalContext.Provider>
  );
}

export default App;
