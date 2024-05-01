import "./ContentsStyles/SearchBar.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import FilterSearchFuncions from "../Context/FIlterSearchFuncions";
import { Blend, Search, CirclePlus } from "lucide-react";

export default function SearchBar() {
  const [find, setFind] = useState("");

  var {
    searchResult,
    setSearchResult,
    isSearching,
    setISearching,
    macs,
    create,
    setCreate,
    createModel,

    setCreateModel,
  } = useContext(GlobalContext);
  const handleCreate = (e) => {
    e.preventDefault();
    if (createModel) {
      setCreateModel(false);
    }
    setCreate(!create);
  };

  const handleCreateModel = (e) => {
    e.preventDefault();
    if (create) {
      setCreate(false);
    }
    setCreateModel(!createModel);
  };
  return (
    <>
      <div className="SearchBarConteiner">
        <select id="Categ" onChange={(e) => {}}>
          <option value="Model">Model</option>
          <option value="Client">Client</option>
          <option value="Problem">Problem</option>
          <option value="Already Used">Already Used</option>
        </select>

        <input
          id="SearchBarTextInput"
          type="text"
          placeholder="Search Something"
          onChange={(e) => {
            setFind(e.target.value);
          }}
        />
        <button
          id="SubmitSearchButton"
          className="globalButtonStyle"
          type="submit"
          onClick={() => {
            const result = FilterSearchFuncions.FiltredArray(macs, find);
            setSearchResult(result);
            if (find) {
              setISearching(true);
            } else {
              setISearching(false);
            }
          }}
        >
          Search
          <Search size={12} />
        </button>
        <button
          className="globalButtonStyle"
          id="createMac"
          onClick={(e) => {
            handleCreate(e);
          }}
        >
          Add Device
          <CirclePlus size={12} />
        </button>

        <button
          className="globalButtonStyle"
          id="createMac"
          onClick={(e) => {
            handleCreateModel(e);
          }}
        >
          Add Model
          <Blend size={12} />
        </button>
      </div>
    </>
  );
}
