function LocalStorage(macList) {
  try {
    if (macList && macList.length !== 0) {
      const macListJSON = JSON.stringify(macList);
      localStorage.setItem("macList", macListJSON);
    }
  } catch (error) {
    console.error("Error while storing macs in localStorage:", error);
    throw error;
  }
}

function FetchDataFromAPI(setMacs, loading, SetLoading) {
  fetch("http://localhost:5242/GetAllDevices")
    .then((response) => response.json())
    .then((dataMacList) => {
      if (dataMacList != null) {
        console.log('data recived from database', dataMacList);
        localStorage.setItem("macList", JSON.stringify(dataMacList));
        setMacs(dataMacList);
        SetLoading(false);
      }
    })
    .catch((error) => {//throw a error if something get error
      console.error("Error at fetching data:", error);
    });
}


//fetch data at local_storage, 
function CheckLocalStorageOrFetch(setMacs, loading, SetLoading) {
  const storedData = localStorage.getItem("macList");
  if (storedData) {
    const _parsedData = JSON.parse(storedData);
    setMacs(_parsedData);
  } else {
    //if not found, then fetch from database
    FetchDataFromAPI(setMacs, SetLoading);
    if (SetLoading) {
      SetLoading(true);
    }
  }
}

function GetAndUpdateData(setMacs, currentStateMacList) {
  if (Array.isArray(currentStateMacList)) {
    setMacs(currentStateMacList);
  } else {
    throw new Error("Object passed to this function is not an array type!");
  }
}

export default {
  CheckLocalStorageOrFetch,
  GetAndUpdateData,
  FetchDataFromAPI,
  LocalStorage,
};
