import React, { useState, useEffect } from 'react';
import "./ContentsStyles/MacListStyles.css";

export default function MacList() {
  const [macData, setMacData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5242/MacMainDatabase")
      .then((response) => response.json())
      .then((data) => setMacData(data));
    }, []);
    console.log(macData)

  

  return (
    <>
      <ul className="MacListConteiner">
        <li className="MacListLi">
          <p>MODEL</p>
          <p>MAC</p>
          <p>PROBLEM</p>
          <p>REMOTE ACESS</p>
        </li>

        {macData.map((item, index) => (
          <li key={index} className="MacListLi">
            <p>{item.model}</p>
            <p>{item.mac}</p>
            <p>{item.problem ? 'Yes' : 'No'}</p>
            <p>{item.remoteAccess ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"
