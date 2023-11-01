function LocalStorage(macList) {
  try {
    const macListJSON = JSON.stringify(macList);
    localStorage.setItem("macList", macListJSON);
    console.log("saving macs at database...");
  } catch (error) {
    console.error("Something was error at localStorage:", error);
  }
}

function FetchDataFromAPI(setMacs,loading, SetLoading) {
  fetch("http://localhost:5242/MacMainDatabase")
    .then((response) => response.json())
    .then((dataMacList) => {
      if (dataMacList != null) {
        localStorage.setItem("macList", JSON.stringify(dataMacList));
        setMacs(...dataMacList);
        SetLoading(!loading);

        console.log("Saving data at localStorage:", dataMacList);
      }
    })
    .catch((error) => {
      console.error("Erro ao obter dados da API:", error);
    });
}

function CheckLocalStorageAndFetch(setMacs,loading, SetLoading) {
  const storedData = localStorage.getItem("macList");
  console.log("loading");

  if (storedData != null && storedData != "undefined") {
    const _parsedData = JSON.parse(storedData);
    console.log("Getting data from localStorage:");
  } else {
    console.log("Theres no data at localStorage, calling api");
    FetchDataFromAPI(setMacs,loading, SetLoading);
  }
}

function GetAndReturnLocalStoreData(setMacs,loading, SetLoading) {
  const storedData = localStorage.getItem("macList");

  if (storedData && storedData != "undefined") {
    const _parsedData = JSON.parse(storedData);
    return _parsedData;
  } else {
    console.log("Theres no data until now, calling function to get data");
    CheckLocalStorageAndFetch(setMacs,loading, SetLoading);
  }
}




export default {
  FetchDataFromAPI,
  LocalStorage,
  CheckLocalStorageAndFetch,
  GetAndReturnLocalStoreData,
};
