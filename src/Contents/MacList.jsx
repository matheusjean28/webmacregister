import "./ContentsStyles/MacListStyles.css";
import CreateMac from "./RigthBar/CreateMacComponents/CreateMac.jsx";
import { useContext, useState } from "react";
import InteractiveLI from "./InteractiveLi/InteractiveLI.jsx";
import FilterSearchFuncions from "../Context/FIlterSearchFuncions.jsx";
import { GlobalContext } from "../Context/GlobalContext";
import EmpytMacList from "./MacList/EmpytMacList.jsx";
import { X, Check, Edit, Delete, KeyIcon } from "lucide-react";
import RenderEmpytItem from "../Utils/RenderEmpytItem.jsx";
import ParseStringToFloat from "../Utils/ParseStringToFloat.jsx";
import RemoveMac from "../Utils/RemoveMac.jsx";

export default function MacList() {
  var {
    isSearching,
    searchResult,
    create,
    setCreate,
    macs,
    setNotificationMessage,
    setNotificationStatus,
    setMacs,
  } = useContext(GlobalContext);

  const [showInteractiveLI, setShowInteractiveLI] = useState(false);
  const [selectLiId, setSelectLiId] = useState(Number);

  const handleInteractiveLI = (e, id) => {
    e.preventDefault();
    setShowInteractiveLI(!showInteractiveLI);
    const selectedItemIndex = FilterSearchFuncions.GetItemByIdAtList(macs, id);
    if (selectedItemIndex !== null) {
      setSelectLiId(selectedItemIndex);
    } else {
    }
  };

  const handlerDeleteMac = (id) => {
    try {
      const userConfirmed = window.confirm(
        "Would you like to delete that mac?"
      );
      if (userConfirmed) {
        setMacs(RemoveMac(id, macs))

      }
    } catch (error) {
      console.log(error);
      setNotificationMessage(error.message); //display error at screen
      setNotificationStatus(true);
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
                    <li key={id} className="MacListLi remoteAccessTrue">
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
                        {
                          //check if signalRx can be converted to int and then to float
                          //if it can, then return a parsed value, otherwise return a empyt item icon
                          signalRX
                            ? ParseStringToFloat(signalRX)
                            : RenderEmpytItem(signalRX)
                        }
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
                      <button
                        className="delete-mac-button"
                        onClick={(e) => {
                          console.log(id);
                          handleInteractiveLI(e, id);
                        }}
                      >
                        <Edit size={15} color="white" />
                      </button>
                      <button
                        className="edit-mac-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handlerDeleteMac(id);
                        }}
                      >
                        <Delete size={15} color="white" />
                      </button>
                    </li>
                  ) : (
                    //end remote acess true

                    //start remote acess false
                    <li className="MacListLi ">
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
                        {
                          //check if signalRx can be converted to int and then to float
                          //if it can, then return a parsed value, otherwise return a empyt item icon
                          signalRX
                            ? ParseStringToFloat(signalRX)
                            : RenderEmpytItem(signalRX)
                        }
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
                      <button
                        className="delete-mac-button"
                        onClick={(e) => {
                          console.log(id);
                          handleInteractiveLI(e, id);
                        }}
                      >
                        <Edit size={15} color="white" />
                      </button>
                      <button
                        className="edit-mac-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handlerDeleteMac(id);
                        }}
                      >
                        <Delete size={15} color="white" />
                      </button>
                    </li>
                  ) //end remote acess false
              )
          )}
        </ul>
      </>
    );
  }
}
