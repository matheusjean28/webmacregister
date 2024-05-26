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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSave = () => {
    const userConfirmed = window.confirm("Would you like to save changes?");
    if (userConfirmed) {
      console.log("Data Saved:", formData);
      const updatedMacs = macs.map((mac, index) =>
        index === selectLiId ? formData : mac
      );
      setMacs(updatedMacs);
      setIsEditingItem(false);
    }
  };

  return (
    <form className="EditInteractiveLIConteiner">
      <div>
        <label>Check Date:</label>
        <input
          type="text"
          name="checkDate"
          value={formData.checkDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>MAC:</label>
        <input
          type="text"
          name="mac"
          value={formData.mac}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Problem:</label>
        <input
          type="text"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Remote Access:</label>
        <input
          type="text"
          name="remoteAccess"
          value={formData.remoteAccess}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Signal RX:</label>
        <input
          type="text"
          name="signalRX"
          value={formData.signalRX}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSave}>
        <Save size={15} />
        Save
      </button>
      <button onClick={(e) => {
        e.preventDefault()
        setIsEditingItem(false)
      }} className="closeEditButton">
        <X size={15}/>
      </button>
    </form>
  );
}
