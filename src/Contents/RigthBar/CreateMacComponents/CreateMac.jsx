import { useState } from "react";
import CreateDevice from "../../../Context/DataHandler.jsx";
import "../../ContentsStyles/CreateMacStyles.css";
import { v4 as uuidv4 } from "uuid";
import FormCreateMac from "./FormCreateMac.jsx";

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
  const [UsedAt, setUsedAt] = useState("");
  const [remoteAccess, setRemoteAccess] = useState(false);

  const isValidMac = (mac) => {
    if (mac.length > 0 && mac.length <= 15) {
      return true;
    } else {
      return false;
    }
  };

  const isValidSignalRX = (signalRX) => {
    return !isNaN(signalRX);
  };

  function handleSubmitForm(e= Event) {
    e.preventDefault();

    if (!isValidMac(mac) || !isValidSignalRX(signalRX)) {
      return console.error("invalid field mac or signal");
    }

    const newMacData = {
      id: uuidv4(),
      mac,
      model,
      problem: problem === "" ? "OK" : problem,
      UsedAt,
      signalRX: `${-signalRX}`,
      remoteAccess,
    };
    
    CreateDevice(newMacData); //POST DATA at api
    setMacs((prevMacs) => [...prevMacs, newMacData]);
    setCreate(!create);
  }

  return (
    <FormCreateMac
      model={model}
      mac={mac}
      problem={problem}
      signalRX={signalRX}
      UsedAt={UsedAt}
      remoteAccess={remoteAccess}
      setModel={setModel}
      setMac={setMac}
      setProblem={setProblem}
      setSignalRX={setSignalRX}
      setUsedAt={setUsedAt}
      setRemoteAccess={setRemoteAccess}
      deviceModel={deviceModel}
      setDeviceModel={setDeviceModel}
      handleSubmitForm={handleSubmitForm}
    />
  );
}
