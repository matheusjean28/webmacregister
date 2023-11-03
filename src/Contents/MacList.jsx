import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac.jsx";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export default function MacList({macs}) {
  console.log(macs)
  var { create, setCreate } = useContext(GlobalContext);
  
  if (macs.length === 0) {
    return (
      <>
        <div className="MacListConteiner">
          <h4>YOU DON'T HAVE ANY MACS SAVED YET! </h4>
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
                  <p>{id}</p>
                  <p>-25.00 </p>
                  <p>22 July </p>
                  <p>{remoteAccess.toString()} </p>
                  <p>{problem.toString()}</p>
                </li>
              )
            )
          )}
        </ul>
      </>
    );
  }
}
