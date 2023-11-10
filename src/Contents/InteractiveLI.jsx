import "./ContentsStyles/InteractiveLIStyles.css";
import { GlobalContext } from "../Context/GlobalContext";
import { useCallback } from "react";

export default function InteractiveLI({selectLiId,macs}) {
    console.log(macs[selectLiId])
  return (
    <>
      <div className="InteractiveLIConteiner">
        <h3>{selectLiId}</h3>
      </div>
    </>
  );
}
