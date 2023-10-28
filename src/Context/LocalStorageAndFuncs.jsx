function LocalStorage(macList) {
  try {
    const macListJSON = JSON.stringify(macList);
    localStorage.setItem("macList", macListJSON);
    console.log("saving macs at database...");
  } catch (error) {
    console.error("Something was error at localStorage:", error);
  }
}

function FetchDataFromAPI(setMacs, setLoading) {
  console.log("callhere");
  fetch("http://localhost:5242/MacMainDatabase")
    .then((response) => response.json())
    .then((dataMacList) => {
      if (dataMacList == null) {
        throw new Error("null list");
      } else {
        localStorage.setItem("macList", JSON.stringify(dataMacList));
        setMacs(...dataMacList);
        setLoading(!loading);

        console.log("Saving data at localStorage:", dataMacList);
      }
    })
    .catch((error) => {
      console.error("Error on get Data From Api:", error);
    });
}

function CheckLocalStorageAndFetch(loading, SetLoading) {
  const storedData = localStorage.getItem("macList");
  console.log("loading");

  if (storedData != null) {
    const _parsedData = JSON.parse(storedData);
    console.log(_parsedData);
    console.log("Getting data from localStorage:", _parsedData);
  } else {
    console.log("Theres no data at localStorage, calling api");
    FetchDataFromAPI(setMacs,loading, SetLoading);
  }
}

function GetAndReturnLocalStoreData() {
  const storedData = localStorage.getItem("macList");

  if (storedData ) {
    const _parsedData = JSON.parse(storedData);
    return _parsedData;
  } else {
    console.log("Theres no data until now, calling function to get data");
    CheckLocalStorageAndFetch();
  }
}

export default {
  FetchDataFromAPI,
  LocalStorage,
  CheckLocalStorageAndFetch,
  GetAndReturnLocalStoreData,
};
