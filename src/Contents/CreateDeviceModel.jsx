import "./ContentsStyles/CreateDeviceModelStyles.css";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";

export default function CreateDeviceModel() {
  const { deviceModel, setDeviceModel, createModel, setCreateModel } =
    useContext(GlobalContext);

  const [model, setModel] = useState("");
  const [owner, setOwner] = useState("");
  const [mode, setMode] = useState("");
console.log(deviceModel)
  const handleCloseButton = (e) => {
    e.preventDefault();
    setCreateModel(false);
  };

  const handleCreateDevice = (e) => {
    e.preventDefault();
    const device = {
      model,
      owner,
      mode,
    };

    var newList = deviceModel;
    newList.push(device);
    setDeviceModel(newList)

    setModel("");
    setOwner("");
    setMode("");
  };

  return (
    <div className="CreateDeviceModelConteiner">
      <form className="CreateDeviceMacForm" onSubmit={handleCreateDevice}>
        <button className="close" onClick={handleCloseButton}>
          x
        </button>

        <h4>
          CREATE <br /> DEVICE MODEL
        </h4>

        <input
          type="text"
          placeholder="Device Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <select
          name="Mode"
          id="Mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="Router">Router</option>
          <option value="Bridge">Bridge</option>
          <option value="Router/Bridge">Router/Bridge</option>
        </select>
        <button className="CreateButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
