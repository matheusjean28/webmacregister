import "./ContentsStyles/SearchBar.css";
import {useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import FIlterSearchFuncions from "../Context/FIlterSearchFuncions";

export default function SearchBar() {
  const [find, setFind] = useState("");

  var { macs, create, setCreate, createModel, setCreateModel } =
    useContext(GlobalContext);
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
        <select
          name="#"
          id="Categ"
          onChange={(e) => {
            FIlterSearchFuncions.FilterType(e.target.value, macs);
            console.log("change");
          }}
        >
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
            setFind(e.target.value)
            console.log("Loking for:", find)
          }}
        />
        <button id="SubmitSearchButton" className="SubmitSearch" type="submit"
        onClick={() => {
          FIlterSearchFuncions.FiltredArray(macs, find)
          console.log(macs, find)
        }}
        >
          Search
        </button>
        <button
          id="createMac"
          onClick={(e) => {
            handleCreate(e);
          }}
        >
          Create
        </button>

        <button
          id="createMac"
          onClick={(e) => {
            handleCreateModel(e);
          }}
        >
          CreateModel
        </button>
      </div>
    </>
  );
}
