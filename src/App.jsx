import React, { useEffect, useState } from "react";
import Headers from "./Contents/Header";
import SearchBar from "./Contents/SearchBar";
import MacList from "./Contents/MacList";
import HeaderMacList from "./Contents/HeaderMacList";
import LoadingData from "./Contents/LoadingData";
import { GlobalContext } from "./Context/GlobalContext";
import LocalStorageAndFuncs from "./Context/LocalStorageAndFuncs";
import CreateMac from "./Contents/RigthBar/CreateMacComponents/CreateMac";
import LoadingThreeDots from "./Contents/LoadingThreeDots";
import CreateDeviceModel from "./Contents/CreateDeviceModel";
import useDataUpdater from './Hooks/useDataUpdater'

function App() {
  const [macs, setMacs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [create, setCreate] = useState(false);
  const [createModel, setCreateModel] = useState(false);
  const [deviceModel, setDeviceModel] = useState([]);
  const [isSearching, setISearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    LocalStorageAndFuncs.CheckLocalStorageOrFetch(setMacs, loading, setLoading);
  }, []);

  useDataUpdater(LocalStorageAndFuncs.LocalStorage(macs),1000)

  return (
    <GlobalContext.Provider
      value={{
        createModel,
        setCreateModel,
        macs,
        setMacs,
        create,
        setCreate,
        loading,
        setLoading,
        deviceModel,
        setDeviceModel,
        isSearching,
        setISearching,
        searchResult,
        setSearchResult,
      }}
    >
      <Headers />
      {loading ? <LoadingThreeDots /> : ""}
      {createModel ? (
        <>
          <SearchBar
            value={{ create, setCreate, createModel, setCreateModel }}
          />
          <CreateDeviceModel
            deviceModel={deviceModel}
            setDeviceModel={setDeviceModel}
          />
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
                deviceModel={deviceModel}
                setDeviceModel={setDeviceModel}
              />
            </>
          ) : false ? ( //set as false only for not show element
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
