import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac";
import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";
import "./ContentsStyles/MacListStyles.css";
import LocalStorageAndFuncs from "../Context/LocalStorageAndFuncs";
import GlobalContex from '../Context/GlobalContext'

export default function MacList() {
  

  const data = LocalStorageAndFuncs.GetAndReturnLocalStoreData();
  console.log(data);

  if(data == null){
    return (<>
      <h4>YOU ALREADY HAVEN'T MAC SAVED! </h4>

    </>)
  }


  return (
    <>
      <ul className="MacListConteiner">
        {Array.from(data).map(
          ({ id, mac, model, problem, remoteAccess }) => (
            <li key={id} className="MacListLi">
              <p>{model}</p>
              <p>{mac}</p>
              <p>{id}</p>
              <p>-25.00 </p>
              <p>22 July </p>
              <p>{remoteAccess.toString()} </p>
              <p>{problem.toString()}</p>
            </li>
          )
        )}

      </ul>
    </>
  );
  var { create, setCreate } = useContext(GlobalContext);
  console.log(create);
  return (
    <>
      {create ? (
        <CreateMac />   
      ) : (
        <ul className="MacListConteiner">
          <li className="MacListLi">
            <p>MODEL</p>
            <p>MAC</p>
            <p>PROBLEM</p>
            <p>REMOTE ACESS</p>
          </li>

          <li className="MacListLi">
            <p>MODEL</p>
            <p>MAC</p>
            <p>PROBLEM</p>
            <p>REMOTE ACESS</p>
          </li>
        </ul>
      )}
    </>
  );
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"
