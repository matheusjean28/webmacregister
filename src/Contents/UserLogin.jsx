import './ContentsStyles/UserLoginStyles.css'
import { useState } from 'react';
export default function UserLogin() {
    let [loop, setLoop] = useState(false);

    const handleLoop = () => {
        setLoop(!loop)
    }
    return (
        <>
            <div className="UserLoginConteiner">
                <h1>START SECTION</h1>
                <p>You need to be logged to start</p>
                <form className='LogginUser' action="LogginUser" method="post">
                    <input type="text" placeholder='E-mail' />
                    <input type="password" placeholder='Password' />
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        handleLoop()
                    }} >
                        Login
                    </button>
                    {loop ? <div class="loading" ></div> : ""}
                </form>
            </div>
        </>
    )
}