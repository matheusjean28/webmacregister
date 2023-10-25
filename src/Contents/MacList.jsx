import './ContentsStyles/MacListStyles.css'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext.jsx";

export default function MacList() {


    return (
  
  <>
            <ul className="MacListConteiner">
                <li className='MacListLi'>
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
    )
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"