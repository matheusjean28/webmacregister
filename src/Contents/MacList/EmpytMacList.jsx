import { GlobalContext } from "../../Context/GlobalContext";
import React from "react";
import {  useContext } from "react";



export default function EmpytMacList() {
  //display a message to user about dont have any macs saved yet
  const { setCreate, create, setIsInteractiveOpen } = useContext(GlobalContext);
  return (
    <>
      <div className="MacListEmpytList">
        <img className="notfound" src="/notfound.png" />
        <h4>YOU DON'T HAVE ANY MACS SAVED YET! </h4>
        <button
          onClick={(e) => {
            setCreate(!create);
            setIsInteractiveOpen(false);
          }}
          className="MacListEmpytListButton"
        >
          Create Mac
        </button>
      </div>
    </>
  );
}
