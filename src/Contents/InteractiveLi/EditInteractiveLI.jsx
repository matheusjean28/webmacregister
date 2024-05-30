import React, { useState, useContext } from "react";
import { Save, X } from "lucide-react";
import "../ContentsStyles/EditInteractiveLIStyles.css";
import { GlobalContext } from "../../Context/GlobalContext";

export default function EditInteractiveLI({ selectLiId, setIsEditingItem }) {
  const { macs, setMacs } = useContext(GlobalContext);
  const selectedMac = macs[selectLiId];

  const [formData, setFormData] = useState({
    checkDate: selectedMac.checkDate,
    mac: selectedMac.mac,
    model: selectedMac.model,
    problem: selectedMac.problem,
    remoteAccess: selectedMac.remoteAccess,
    signalRX: selectedMac.signalRX,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    const userConfirmed = window.confirm("Would you like to save changes?");
    if (userConfirmed) {
      const updatedMacs = macs.map((mac, index) =>
        index === selectLiId ? formData : mac
      );
      setMacs(updatedMacs);
      setIsEditingItem(false);
    }
  };

  return (
    <form className="EditInteractiveLIConteiner">
      <div className="EditItemDivLabel">
        <label>Check Date:</label>
        <input
        className="EditItemInput"
          type="text"
          name="checkDate"
          value={formData.checkDate}
          onChange={handleChange}
        />
      </div>
      <div className="EditItemDivLabel cannotBeEdited">
        <label>MAC:</label>
        <h6>{formData.mac}</h6>
      </div>
      <div className="EditItemDivLabel cannotBeEdited">
        <label>Model:</label>
        <h6>{formData.model}</h6>
      </div>
      <div className="EditItemDivLabel">
        <label>Problem:</label>
        <textarea
          className="EditItemInput"
          type="text"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
        />
      </div>
      <div className="EditItemDivLabel">
        <label>Signal RX:</label>
        <input
          className="EditItemInput"
          type="text"
          name="signalRX"
          value={formData.signalRX}
          onChange={handleChange}
        />
      </div>
      <div className=" RemoteAcessInputCheck">
        <label>Remote Access:</label>
        <input
          type="checkbox"
          name="remoteAccess"
          checked={formData.remoteAccess}
          onChange={handleChange}
        />
      </div>
      <div className="EditItemDivLabel">
        <label>Used At:</label>
        <textarea
          className="EditItemInput"
          type="text"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
        />
      </div>
      <button className="SaveEditedItem" type="button" onClick={handleSave}>
        <Save size={15} />
        Save
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsEditingItem(false);
        }}
        className="closeEditButton"
      >
        <X size={15} color="black"/>
      </button>
    </form>
  );
}
