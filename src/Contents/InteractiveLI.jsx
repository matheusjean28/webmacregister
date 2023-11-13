import "./ContentsStyles/InteractiveLIStyles.css";

export default function InteractiveLI({ selectLiId, macs }) {

  const {checkDate, mac,model,problem,remoteAccess,signalRX} = macs[selectLiId]
  console.log(checkDate, mac,model,problem,remoteAccess,signalRX)
  return (
    <>
      <div className="InteractiveLIConteiner">
        <h3>Device Informations</h3>
        <div className="conteinerInfo">
          <h5 className="InteractiveListH5">Model</h5>
          <h6 className="InteractiveListH6">{macs[selectLiId].model}</h6>

          <h5 className="InteractiveListH5">MAC</h5>
          <h6 className="InteractiveListH6">testing</h6>

          <h5 className="InteractiveListH5">PROBLEM</h5>
          <h6 className="InteractiveListH6">Dont get Connection</h6>

          <h5 className="InteractiveListH5">Remote Acess</h5>
          <img className="InteractiveListIMG"
            src={
              // macs[selectLiId].remoteacess 
              false
              ? "public/not.png" : "public/sim.png"
            }
          />
        </div>
      </div>
    </>
  );
}
