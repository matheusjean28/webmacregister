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
                    <p>PROBLEM</p>
                    <p>REMOTE ACESS</p>
                </li>

                <li className='MacListLi'>
                    <p>MODEL</p>
                    <p>MAC</p>
                    <p>PROBLEM</p>
                    <p>REMOTE ACESS</p>
                </li>
                

                
            </ul>
        </>
    )
}

// "model": "string",
// "mac": "string",
// "problem": "boolean",
// "remoteAccess": "boolean"