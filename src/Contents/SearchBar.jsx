import "./ContentsStyles/SearchBar.css";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export default function SearchBar() {
  var { create, setCreate, createModel, setCreateModel } = useContext(GlobalContext);
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
    setCreateModel(!createModel)
  };
  return (
    <>
      <div className="SearchBarConteiner">
        <select name="#" id="Categ">
          <option value="Model">Model</option>
          <option value="Client">Client</option>
          <option value="Problem">Problem</option>
          <option value="Already Used">Already Used</option>
        </select>

        <input id="SearchBarTextInput" type="text" placeholder="Input Mac" />
        <button id="SubmitSearchButton" className="SubmitSearch" type="submit">
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
