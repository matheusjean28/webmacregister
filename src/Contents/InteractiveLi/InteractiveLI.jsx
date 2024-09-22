import { useState } from "react";
import "../ContentsStyles/InteractiveLIStyles.css";
import { Check, X, Pencil } from "lucide-react";
import RigthBar from "../RigthBar/RigthBar";
import RenderEmpytItem from "../../Utils/RenderEmpytItem";
import EditInteractiveLI from "./EditInteractiveLI";

export default function InteractiveLI({ selectLiId, macs }) {
  var { checkDate, mac, model, problem, remoteAccess, signalRX, UsedAt } =
    macs[selectLiId];

  const [isEditingItem, setIsEditingItem] = useState(false);
  const [showRigthBar, SetShowRigthBar] = useState(false);
  const [labelToRender, SetLabelToRender] = useState("");
 

  const handleLabelRender = (label) => {
    try {
      label == "usedIn"
        ? SetLabelToRender({ field: "usedIn", data: UsedAt })
        : "";
      label == "problem"
        ? SetLabelToRender({ field: "problem", data: problem })
        : "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="InteractiveLIConteiner">
        {/* <h4 className="DeviceInformationCenter">Device Information</h4> */}
        <span className="FielSpanConfig">
          <h5>Model:</h5>
          <h6>{RenderEmpytItem(model)}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Mac:</h5>
          <h6>{RenderEmpytItem(mac)}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Problem:</h5>
          <button
            className="ShowMoreInfoButton"
            onClick={(e) => {
              e.preventDefault();
              SetShowRigthBar(!showRigthBar);
              handleLabelRender("problem");
            }}
          >
            {RenderEmpytItem(problem)}
          </button>
        </span>

        <span className="FielSpanConfig">
          <h5>SignalRX:</h5>
          <h6>{RenderEmpytItem(signalRX)}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>Check Date:</h5>
          <h6>{RenderEmpytItem(checkDate)}</h6>
        </span>

        <span className="FielSpanConfig">
          <h5>used In:</h5>

          <button
            className="ShowMoreInfoButton"
            onClick={(e) => {
              e.preventDefault();
              SetShowRigthBar(!showRigthBar);
              handleLabelRender("usedIn");
            }}
          >
            {/* change later, read an array of the clients */}
            {UsedAt}
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

        {/* set as invisible just to get space */}
        <span className="FielSpanConfig InvisibleField"></span>
        <span>
          <button
            className="FielSpanConfig ButtonEdit "
            onClick={(e) => {
              e.preventDefault();
              setIsEditingItem(!isEditingItem);
              console.log(macs[selectLiId]);
            }}
          >
            Edit <Pencil size={15} />
          </button>
        </span>
      </div>
      {showRigthBar ? <RigthBar labelToRender={labelToRender} /> : ""}

      {/* need array mac complete to push new item  */}
      {isEditingItem ? (
        <EditInteractiveLI
          isEditingItem={isEditingItem}
          setIsEditingItem={setIsEditingItem}
          selectLiId={selectLiId}
          macs={macs[selectLiId]}
        />
      ) : (
        ""
      )}
    </>
  );
}
