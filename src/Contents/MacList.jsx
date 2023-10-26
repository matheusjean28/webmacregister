import "./ContentsStyles/MacListStyles.css";
import LocalStorageAndFuncs from "../Context/LocalStorageAndFuncs";

export default function MacList() {
  const data = LocalStorageAndFuncs.GetAndReturnLocalStoreData();
  console.log(data);

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
        <li className="MacListLi">
          <p>MODEL</p>
          <p>MAC</p>
          <p>SENSITIVITY</p>
          <p>FIBER TIP</p>
          <p>MEASUREMENT DATE</p>
          <p>REMOTE ACESS</p>
          <p>PROBLEM</p>
        </li>
      </ul>
    </>
  );
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"
