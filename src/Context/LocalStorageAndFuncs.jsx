function LocalStorage(macList) {
  try {
    const macListJSON = JSON.stringify(macList);
    localStorage.setItem("macList", macListJSON);
    console.log("saving macs at database...");
  } catch (error) {
    console.error("Something was error at localStorage:", error);
  }
}
function FetchDataFromAPI(setMacs, loading, SetLoading) {
  fetch("http://localhost:5242/MacMainDatabase")
    .then((response) => response.json())
    .then((dataMacList) => {
      if (dataMacList != null) {
        console.log(dataMacList, "dentro do fetch");

        localStorage.setItem("macList", JSON.stringify(dataMacList));
        setMacs(dataMacList);
        SetLoading(false);
        console.log(dataMacList);

        console.log("Saving data at localStorage:", dataMacList);
      }
    })
    .catch((error) => {
      console.error("Erro ao obter dados da API:", error);
    });
}

function CheckLocalStorageOrFetch(setMacs, loading, SetLoading) {
  const storedData = localStorage.getItem("macList");
  console.log(storedData)
  if (storedData) {
    const _parsedData = JSON.parse(storedData);
    setMacs(_parsedData);
    console.log(_parsedData)
  } else {
    FetchDataFromAPI(setMacs, SetLoading);
    console.log("Theres no data at localStorage, calling API");
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
