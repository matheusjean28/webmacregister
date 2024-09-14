import React from "react";

export default function FormCreateMac({
  model,
  mac,
  problem,
  signalRX,
  UsedAt,
  remoteAccess,
  setModel,
  setMac,
  setProblem,
  setSignalRX,
  setUsedAt,
  setRemoteAccess,
  deviceModel,
  handleSubmitForm,
}) {
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
            {/* it map whole devices model */}
            {Array.from(deviceModel).length == 0 ||
            Array.from(deviceModel).length == undefined
              ? "..."
              : deviceModel.map((e) => (
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
            onChange={(e) => setMac(e.target.value.toUpperCase())}
            id="Mac"
            placeholder="Mac"
            maxLength={15}
          />
          <input
            type="text"
            value={problem}
            onChange={(e) => {
              setProblem(e.target.value === "" ? "OK" : e.target.value.toUpperCase());
            }}
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
            value={UsedAt}
            onChange={(e) => setUsedAt(e.target.value.toUpperCase())}
            id="UsedAt"
            placeholder="UsedAt"
          />
          <p></p>
          <p>Remote Access</p>
          <input
            className="MacFormCheckbox"
            type="checkbox"
            checked={remoteAccess}
            onChange={() => setRemoteAccess(!remoteAccess)}
          />
          <button
            className="MacFormBtn"
            onClick={(e) => {
              e.preventDefault();
              handleSubmitForm(e);
            }}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
