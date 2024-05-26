import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./CreateMac.jsx";
import { useContext, useState } from "react";
import InteractiveLI from "./InteractiveLi/InteractiveLI.jsx";
import FilterSearchFuncions from "../Context/FIlterSearchFuncions.jsx";
import { GlobalContext } from "../Context/GlobalContext";
import EmpytMacList from "./MacList/EmpytMacList.jsx";
import { X, Check } from "lucide-react";
import RenderEmpytItem from "../Utils/RenderEmpytItem.jsx";

export default function MacList({ macs }) {
  var { isSearching, searchResult, create, setCreate } =
    useContext(GlobalContext);

  const [showInteractiveLI, setShowInteractiveLI] = useState(false);
  const [selectLiId, setSelectLiId] = useState(Number);
  const [isInteractiveOpen, setIsInteractiveOpen] = useState(false);

  const handleInteractiveLI = (e, id) => {
    e.preventDefault();
    setShowInteractiveLI(!showInteractiveLI);
    const selectedItemIndex = FilterSearchFuncions.GetItemByIdAtList(macs, id);
    if (selectedItemIndex !== null) {
      setSelectLiId(selectedItemIndex);
    } else {
    }
  };

  const handleCreate = (e, mac) => {
    e.preventDefault();
    setCreate(!create);
    setSelectLiId(mac);
    setIsInteractiveOpen(false);
  };

  if (macs.length === 0) {
    return <EmpytMacList />;
  } else {
    return (
      <> {showInteractiveLI && (
        <InteractiveLI selectLiId={selectLiId} macs={macs} />
      )}
        <ul className="MacListConteiner">
          {create ? (
            <CreateMac />
          ) : (
            
            //searchResult : macs defines betweem result search or data at localstorage
            Array.from(isSearching ? searchResult : macs).reverse().map(
              (
                { id, checkDate, mac, model, problem, remoteAccess, signalRX },
                index
              ) =>
                remoteAccess ? (
                  <li
                    onClick={(e) => {
                      handleInteractiveLI(e, id);
                    }}
                    key={id}
                    className="MacListLi remoteAccessTrue"
                  >
                    <p>{RenderEmpytItem(model)}</p>
                    <p>{RenderEmpytItem(mac)}</p>
                    <p>{RenderEmpytItem(problem)}</p>
                    <p>{RenderEmpytItem(signalRX)} </p>
                    <p>{RenderEmpytItem(checkDate)} </p>
                    {remoteAccess ? (
                      <p className="remoteAccessTrue">
                        {" "}
                        <Check />{" "}
                      </p>
                    ) : (
                      <p>
                        {" "}
                        <X />{" "}
                      </p>
                    )}
                  </li>
                ) : (
                  <li
                    onClick={(e) => {
                      handleInteractiveLI(e, id);
                    }}
                    key={id}
                    className="MacListLi "
                  >
                    <p>{RenderEmpytItem(model)}</p>
                    <p>{RenderEmpytItem(mac)}</p>
                    <p>{RenderEmpytItem(problem)}</p>
                    <p>{RenderEmpytItem(signalRX)} </p>
                    <p>{RenderEmpytItem(checkDate)} </p>
                    {remoteAccess ? (
                      <p className="remoteAccessTrue">
                        {" "}
                        <Check />{" "}
                      </p>
                    ) : (
                      <p>
                        {" "}
                        <X />{" "}
                      </p>
                    )}
                  </li>
                )
            )
          )}
         
        </ul>
      </>
    );
  }
}
