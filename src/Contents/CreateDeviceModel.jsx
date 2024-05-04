import "./ContentsStyles/CreateDeviceModelStyles.css";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";
import {X,Router }from   'lucide-react'

export default function CreateDeviceModel() {
  const { deviceModel, setDeviceModel, createModel, setCreateModel } =
    useContext(GlobalContext);

  const [model, setModel] = useState("");
  const [owner, setOwner] = useState("");
  const [mode, setMode] = useState("");

  const [modelInput, setModelInput] = useState(false);
  const [ownerInput, setOwnerInput] = useState(false);




  const handleCloseButton = (e) => {
    e.preventDefault();
    setCreateModel(false);
  };

  const handleCreateDevice = (e) => {
    e.preventDefault();

    const isModelValid = model.length >= 6 && model.length <= 30;
    const isOwnerValid = owner.length >= 6 && owner.length <= 30;

    setModelInput(!isModelValid);
    setOwnerInput(!isOwnerValid);

    if (isModelValid && isOwnerValid) {
      const device = {
        model,
        owner,
        mode,
      };

      var newList = deviceModel;
      newList.push(device);
      setDeviceModel(newList);

      setModel("");
      setOwner("");
      setMode("");
    }

    setTimeout(() => {
      setModelInput(false);
      setOwnerInput(false);
    }, 10000);
  };

  return (
    <div className="CreateDeviceModelConteiner">
      <form className="CreateDeviceMacForm" onSubmit={handleCreateDevice}>
        <button className="close" onClick={handleCloseButton}>
          <X size={12}/>
        </button>

        <h4 className="HeaderCreateDeviceModel">
          CREATE <br /> DEVICE MODEL
        </h4>

        <input
          //verify styles
          //format before push
          className={modelInput ? "colorRed " : "inputColorBase"}
          maxLength={30}
          type="text"
          placeholder="Device Model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value.toUpperCase());
          }}
        />

        <input
          className={ownerInput ? "colorRed" : "inputColorBase"}
          type="text"
          placeholder="Owner"
          value={owner}
          onChange={(e) => {
            setOwner(e.target.value.toUpperCase());
          }}
        />

        <select
          name="Mode"
          id="Mode"
          value={mode}
          onChange={(e) => setMode(e.target.value.toUpperCase())}
        >
          <option value="Router">Router</option>
          <option value="Bridge">Bridge</option>
          <option value="Router/Bridge">Router/Bridge</option>
        </select>
        <button className="CreateButton" type="submit">
          Create
          <Router color="black" size={18}/>
        </button>
      </form>
    </div>
  );
}
