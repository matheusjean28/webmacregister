import "./ContentsStyles/SearchBar.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import FilterSearchFuncions from "../Context/FIlterSearchFuncions";
import { Blend, Search, CirclePlus } from "lucide-react";
import SearchResultFilter from "../Utils/SearchResultFilter";

export default function SearchBar() {
  const [find, setFind] = useState("");

  var {
    searchResult,
    setSearchResult,
    isSearching,
    setISearching,
    setMacs,
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

  const handleSearchMac = () => {
    setISearching(true);
    try {
      if (find.length == 0) {
        throw "cannot search for empyt";
      }

      setSearchResult(SearchResultFilter(find, macs));
    } catch (error) {
      console.error(error);
    }
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
          //when this value is '' result return all list
          onChange={(e) => {
            console.log(e.target.value)
            if (e.target.value == "") {
              setISearching(false);
            }
            
            setFind(e.target.value.trim());
          }}
        />
        <button
          id="SubmitSearchButton"
          className="globalButtonStyle"
          type="submit"
          onClick={() => {
            handleSearchMac();
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
