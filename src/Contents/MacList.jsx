import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac.jsx";
import { useContext, useState } from "react";
import InteractiveLI from "./InteractiveLI.jsx";
import { GlobalContext } from "../Context/GlobalContext";

export default function MacList({ macs }) {
  var { create, setCreate } = useContext(GlobalContext);

  const [showInteractiveLI, setShowInteractiveLI] = useState(false);
  const [selectLiId, setSelectLiId] = useState();

  const handleInteractiveLI = (e) => {
    e.preventDefault();
    setShowInteractiveLI(!showInteractiveLI);
  };

  const handleCreate = (e, index) => {
    e.preventDefault();
    setCreate(!create);
    console.log(index)
    setSelectLiId(index);
    
  };

  if (macs.length === 0) {
    return (
      <>
        <div className="MacListEmpytList">
          <img className="notfound" src="public/notfound.png" />
          <h4>YOU DON'T HAVE ANY MACS SAVED YET! </h4>
          <button
            onClick={(e) => {
              handleCreate(e);
            }}
            className="MacListEmpytListButton"
          >
            Create Mac
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ul className="MacListConteiner">
          {create ? (
            <CreateMac />
          ) : (
            Array.from(macs)
              .reverse()
              .map(({id, mac, model, problem, remoteAccess, index }) => (
                <li
                  onClick={(e, index) => {
                    handleInteractiveLI(e, index);
                  }}
                  key={Date.now}
                  className="MacListLi "
                >
                  <p>{model}</p>
                  <p>{mac}</p>
                  <p>{problem.toString()}</p>
                  <p>{id}</p>
                  <p>-25.00 </p>
                  <p>22 July </p>
                  <p>{remoteAccess.toString()} </p>
                </li>
              ))
          )}

          {showInteractiveLI && <InteractiveLI macs={macs} selectLiId={selectLiId}/>}
        </ul>
      </>
    );
  }
}
