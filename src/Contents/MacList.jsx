import { useState, useEffect } from "react";
import "./ContentsStyles/MacListStyles.css";
import axios from "axios";
import { async } from "q";

export default function MacList() {
  const [macData, setMacData] = useState([]);
 

  return (
    <>
      <ul className="MacListConteiner">
        <li className="MacListLi">
          <p>MODEL</p>
          <p>MAC</p>
          <p>PROBLEM</p>
          <p>REMOTE ACESS</p>
        </li>

       
      </ul>
    </>
  );
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"
