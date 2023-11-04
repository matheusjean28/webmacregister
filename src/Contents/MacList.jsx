import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac.jsx";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export default function MacList({macs}) {
  var { create, setCreate } = useContext(GlobalContext);

  const handleCreate = (e) => {
    e.preventDefault();
    setCreate(!create);

  }

  if (macs.length === 0) {
    return (
      <>
        <div className="MacListEmpytList">
          <h4 >YOU DON'T HAVE ANY MACS SAVED YET! </h4>
          <button onClick={(e) => {
            handleCreate(e);
          }} className="MacListEmpytListButton" >Create Mac</button>
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
            Array.from(macs).reverse().map(
              ({ id, mac, model, problem, remoteAccess }) => (
                <li key={id} className="MacListLi">
                  <p>{model}</p>
                  <p>{mac}</p>
                  <p>{problem.toString()}</p>
                  <p>{id}</p>
                  <p>-25.00 </p>
                  <p>22 July </p>
                  <p>{remoteAccess.toString()} </p>
                </li>
              )
            )
          )}
        </ul>
      </>
    );
  }
}
