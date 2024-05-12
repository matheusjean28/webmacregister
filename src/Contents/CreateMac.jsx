import { useState } from "react";
import "./ContentsStyles/CreateMacStyles.css";
import { v4 as uuidv4 } from "uuid";

export default function CreateMac({
  deviceModel,
  setDeviceModel,
  macs,
  setMacs,
  create,
  setCreate,
}) {
  const [model, setModel] = useState("");
  const [mac, setMac] = useState("");
  const [problem, setProblem] = useState("");
  const [signalRX, setSignalRX] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [remoteAccess, setRemoteAccess] = useState(false);

  const isValidMac = (mac) => {
    if (mac.length > 0 && mac.length <= 15) {
      return true;
    } else {
      return false;
    }
  };

  const isValidProblem = (problem) => {
    if (problem.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const isValidSignalRX = (signalRX) => {
    return !isNaN(signalRX);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (
      !isValidMac(mac) ||
      !isValidProblem(problem) ||
      !isValidSignalRX(signalRX)
    ) {
      return;
    }

    const newMacData = {
      id: uuidv4(),
      mac,
      model,
      problem,
      signalRX,
      checkDate,
      remoteAccess,
    };

    setMacs((prevMacs) => [...prevMacs, newMacData]);
    console.log((prevMacs) => [...prevMacs, newMacData]);
    console.log("saving data at database")
    setCreate(!create);
  };

  return (
    <>
      <div className="CreateMacConteiner">
        <form id="MacForm" className="MacForm" action="#" method="post">
          <select
            onChange={(e) => {
              setModel(e.target.value);
            }}
            name="Model"
            id="Model"
          >
            {deviceModel.map((e) => (
              <option key={e.model} value={e.model}>
                {e.model}
              </option> 
            ))}
            <option value="DM955">DM955</option>
            <option value="DM986 - 414">DM986 - 414</option>
          </select>

          <input
            type="text"
            value={mac}
            onChange={(e) => setMac(e.target.value)}
            id="Mac"
            placeholder="Mac"
            maxLength={15}
          />
          <input
            type="text"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            id="Problem"
            placeholder="Problem"
            maxLength={150}
          />
          <input
            type="text"
            value={signalRX}
            onChange={(e) => setSignalRX(e.target.value)}
            id="TipFiber"
            placeholder="Signal RX"
          />
          <input
            type="text"
            value={checkDate}
            onChange={(e) => setCheckDate(e.target.value)}
            id="CheckDate"
            placeholder="Check Date"
          />
          <p></p>
          <p>Remote Access</p>
          <input
            className="MacFormCheckbox"
            type="checkbox"
            checked={remoteAccess}
            onChange={() => setRemoteAccess(!remoteAccess)}
          />
          <button className="MacFormBtn" onClick={(e) => handleSubmitForm(e)}>
            Create
          </button>
        </form>
      </div>
    </>
  );
}
