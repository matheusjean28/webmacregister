import { useState } from "react";
import "./ContentsStyles/InteractiveLIStyles.css";
import { Check, X } from "lucide-react";
import RigthBar from "./RigthBar/RigthBar";

export default function InteractiveLI({ selectLiId, macs }) {
  var { checkDate, mac, model, problem, remoteAccess, signalRX } =
    macs[selectLiId];

    const [showRigthBar, SetShowRigthBar] = useState(false)
    const [labelToRender, SetLabelToRender] = useState("")
  const clients = [
    { id: 123, name: "Ana MarioMario da silva ferreirta" },
    { id: 456, name: "Mario" },
    { id: 123, name: "Ana" },
    { id: 456, name: "Mario" },
    { id: 123, name: "Ana" },
    { id: 456, name: "Mario" },
    { id: 123, name: "Ana" },
    { id: 456, name: "Mario" },
    { id: 123, name: "Ana" },
    { id: 456, name: "Mario" },
    { id: 123, name: "Ana" },
    { id: 456, name: "Mario" },
  ];

  const handleLabelRender = (label) => {
    try {
      label == "usedIn" ?  SetLabelToRender({field: "usedIn", data:clients}) : ""
      label == "problem" ?  SetLabelToRender({field: "problem", data: problem}) : ""
    } catch (error) {
      console.error(error)
    }
  }
  
  
  return (
    <>
      <div className="InteractiveLIConteiner">
        {/* <h4 className="DeviceInformationCenter">Device Information</h4> */}
        <span className="FielSpanConfig">
          <h5>Model:</h5>
          <h6>{model}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Mac:</h5>
          <h6>{mac}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Problem:</h5>
          <button className="ShowMoreInfoButton"
          onClick={(e) => {
            e.preventDefault()
            SetShowRigthBar(!showRigthBar)
            handleLabelRender("problem")
          }}
          >
            {problem}
          </button>
        </span>

        <span className="FielSpanConfig">
          <h5>SignalRX:</h5>
          <h6>{signalRX}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Check Date:</h5>
          <h6>{checkDate}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>used In:</h5>

          <button className="ShowMoreInfoButton"
          onClick={(e) => {
            e.preventDefault()
            SetShowRigthBar(!showRigthBar)
            handleLabelRender("usedIn")
          }}
          >
            {clients.map((e) => {
              return `\n${e.name}`;
            })}
          </button>
        </span>

        <span
          className={
            !remoteAccess
              ? "WithoutRemoteAcess FielSpanConfig"
              : "WithRemoteAcess FielSpanConfig"
          }
        >
          <h5>Remote Acess</h5>
          {!remoteAccess ? <X size={15} /> : <Check size={15} />}
        </span>
      </div>
          {showRigthBar ? <RigthBar  labelToRender={labelToRender}/> : ""}
    </>
  );
}
