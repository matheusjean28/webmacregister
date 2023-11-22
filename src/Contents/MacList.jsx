import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac.jsx";
import { useContext, useState } from "react";
import InteractiveLI from "./InteractiveLI.jsx";
import { GlobalContext } from "../Context/GlobalContext";

export default function MacList({ macs }) {
  var { isSearching,searchResult,create, setCreate } = useContext(GlobalContext);

  const [showInteractiveLI, setShowInteractiveLI] = useState(false);
  const [selectLiId, setSelectLiId] = useState(Number);
  const [isInteractiveOpen, setIsInteractiveOpen] = useState(false);

  const handleInteractiveLI = (e, mac) => {
    console.log("valor mac", mac);
    e.preventDefault();
    setShowInteractiveLI(!showInteractiveLI);
    setSelectLiId(mac);
  };

  const handleCreate = (e, mac) => {
    e.preventDefault();
    setCreate(!create);
    setSelectLiId(mac);
    setIsInteractiveOpen(false);
  };

  if (macs.length === 0) {
    return (
      <>
        <div className="MacListEmpytList">
          <img className="notfound" src="/notfound.png" />
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
            Array.from(isSearching ? searchResult : macs)
              .map(({ id, checkDate, mac, model, problem, remoteAccess }, index) => (
                <li
                  onClick={(e) => {
                    console.log("valor do mac ao clicar", mac);
                    handleInteractiveLI(e, index);
                  }}
                  key={id}
                  className="MacListLi "
                >
                  <p>{model}</p>
                  <p>{mac}</p>
                  <p>{problem}</p>
                  <p>{mac}</p>
                  <p>-25.00 </p>
                  <p>22 July </p>
                  <p>{remoteAccess} </p>
                </li>
              )
            )
          )}
          {showInteractiveLI && (
            <InteractiveLI selectLiId={selectLiId} macs={macs} />
          )}
        </ul>
      </>
    );
  }
}
