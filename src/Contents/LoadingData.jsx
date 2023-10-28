import "./ContentsStyles/LoadingDatastyles.css";
import { GlobalContext } from "../Context/GlobalContext";
import LocalStorageAndFuncs from "../Context/LocalStorageAndFuncs.jsx";
import { useContext } from "react";

export default function LoadingData() {
  const { loading, SetLoading } = useContext(GlobalContext);
  LocalStorageAndFuncs.GetAndReturnLocalStoreData(loading, SetLoading);

  return (
    <>
      <div className="LoadingDataConteiner">
        <h2>We are loocking for yours Data!</h2>
        <h5>It may take a feel seconds of Your Life!</h5>
      </div>
    </>
  );
}
