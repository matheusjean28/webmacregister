import "./ContentsStyles/InteractiveLIStyles.css";

export default function InteractiveLI({ selectLiId, macs }) {
  var { checkDate, mac, model, problem, remoteAccess, signalRX } =
    macs[selectLiId];

  console.log(checkDate, mac, model, problem, remoteAccess, signalRX);
  return (
    <>
      <div className="InteractiveLIConteiner">
        <h3>Device Informations</h3>
        <div className="conteinerInfo">
          <h5 className="InteractiveListH5">Model</h5>
          <h6 className="InteractiveListH6">{model}</h6>

          <h5 className="InteractiveListH5">MAC</h5>
          <h6 className="InteractiveListH6">{mac}</h6>

          <h5 className="InteractiveListH5">PROBLEM</h5>
          <h6 className="InteractiveListH6">{problem}</h6>

          <h5 className="InteractiveListH5">Remote Acess</h5>
          <img
            className="InteractiveListIMG"
            src={remoteAccess ? "/not.png" : "/sim.png"}
          />
        </div>
      </div>
    </>
  );
}
