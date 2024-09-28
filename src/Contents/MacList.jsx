import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./RigthBar/CreateMacComponents/CreateMac.jsx";
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

  const handleInteractiveLI = (e, id) => {
    console.log(id);
    e.preventDefault();
    setShowInteractiveLI(!showInteractiveLI);
    const selectedItemIndex = FilterSearchFuncions.GetItemByIdAtList(macs, id);
    if (selectedItemIndex !== null) {
      setSelectLiId(selectedItemIndex);
    } else {
    }
  };

  if (macs.length === 0) {
    //active if maclist is == 0
    return <EmpytMacList />;
  } else {
    return (
      <>
        {showInteractiveLI && (
          <InteractiveLI selectLiId={selectLiId} macs={macs} />
        )}
        <ul className="MacListConteiner">
          {create ? (
            <CreateMac />
          ) : (
            //searchResult : macs defines betweem result search or data at localstorage
            Array.from(isSearching ? searchResult : macs)
              .reverse()
              .map(
                (
                  {
                    id,
                    checkDate,
                    mac,
                    model,
                    problem,
                    remoteAccess,
                    signalRX,
                    usedAt,
                  },
                  index
                ) =>
                  remoteAccess ? ( //start remote acess true
                    <li
                      onClick={(e) => {
                        console.log(id);
                        handleInteractiveLI(e, id);
                      }}
                      key={id}
                      className="MacListLi remoteAccessTrue"
                    >
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(model)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(mac)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(problem)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(usedAt)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(signalRX)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(checkDate)}
                      </p>
                      {remoteAccess ? (
                        <p className="MacListProblemOverflow">
                          <Check size={15} />
                        </p>
                      ) : (
                        <p className="MacListProblemOverflow">
                          <X size={15} />
                        </p>
                      )}
                    </li>
                  ) : (
                    //end remote acess true

                    //start remote acess false
                    <li
                      onClick={(e) => {
                        handleInteractiveLI(e, id);
                        console.log(id);
                      }}
                      key={id}
                      className="MacListLi "
                    >
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(model)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(mac)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(problem)}
                      </p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(usedAt)}
                      </p>
                      <p className="MacListProblemOverflow">{
                        signalRX ? signalRX.toFixed() : RenderEmpytItem(signalRX)
                        }</p>
                      <p className="MacListProblemOverflow">
                        {RenderEmpytItem(checkDate)}
                      </p>
                      {remoteAccess ? (
                        <p className="MacListProblemOverflow">
                          <Check size={15} />
                        </p>
                      ) : (
                        <p className="MacListProblemOverflow">
                          <X size={15} />
                        </p>
                      )}
                    </li>
                  ) //end remote acess false
              )
          )}
        </ul>
      </>
    );
  }
}
