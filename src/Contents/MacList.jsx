import "./ContentsStyles/MacListStyles.css";
import CreateMac from './CreateMac.jsx'
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import LocalStorageAndFuncs from "../Context/LocalStorageAndFuncs.jsx";

export default function MacList( macs, create, setCreate, loading, SetLoading ) {
  const data = LocalStorageAndFuncs.GetAndReturnLocalStoreData( macs, create, setCreate, loading, SetLoading);
  var { create, setCreate } = useContext(GlobalContext);


  if (data == null) {
    LocalStorageAndFuncs.CheckLocalStorageAndFetch( macs, create, setCreate, loading, SetLoading );
    return (
      <>
        <h4>YOU ALREADY HAVEN'T MAC SAVED! </h4>
      </>
    );
  }
  else {

  return (
    <>
      <ul className="MacListConteiner">
        {create ? <CreateMac/> : Array.from(data).map(({ id, mac, model, problem, remoteAccess }) => (
          <li key={id} className="MacListLi">
            <p>{model}</p>
            <p>{mac}</p>
            <p>{id}</p>
            <p>-25.00 </p>
            <p>22 July </p>
            <p>{remoteAccess.toString()} </p>
            <p>{problem.toString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
}
