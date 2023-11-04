import './ContentsStyles/CreateDeviceModelStyles.css'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext } from 'react'
export default function CreateDeviceModel() {
    const { createModel, setCreateModel } = useContext(GlobalContext);

    const handleCloseButton = (e) => {
        e.preventDefault();
        setCreateModel(false);
    }

    return (
        <>
            <div className="CreateDeviceModelConteiner">
                <form className="CreateDeviceMacForm" action="#">
                    <button  className='close' onClick={(e) => {
                        handleCloseButton (e);
                    }}>x</button>
                    <h4>CREATE  <br /> DEVICE MODEL</h4>

                    <input type="text" placeholder='Device Model' />
                    <input type="" placeholder='Owner' />

                    <select name="Mode" id="Mode">
                        <option value="Router">Router </option>
                        <option value="Bridge">Bridge </option>
                        <option value="Router/Bridge">Router/Bridge </option>

                    </select>
                </form>
            </div>
        </>
    )
}