import "./ContentsStyles/CreateMacStyles.css";

export default function CreateMac() {
  const handleSubmitForm = (e) => {
    e.preventDefault();


  }


  return (
    <>
      <div className="CreateMacConteiner">
        <form className="MacForm" action="#" method="post">
          <select name="Model" id="Model">
            <option value="DM955">DM955</option>
            <option value="DM986 - 414">DM986 - 414</option>
          </select>
          <input type="text" id="Mac" placeholder="Mac" maxLength={15} />
          <input
            type="text"
            id="Problem"
            placeholder="Problem"
            maxLength={150}
          />
          <input type="text" id="TipFiber" placeholder="Signal RX" />
          <input type="text" id="CheckDate" placeholder="check date" />
          <p></p>
          <p>Remote acess</p>
          <input className="MacFormCheckbox" type="checkbox"  />
          <button className="MacFormBtn" onClick={(e) => {
            handleSubmitForm(e);
          }}>Create</button>
        </form>
      </div>
    </>
  );
}

// <p>{model}</p>
// <p>{mac}</p>
// <p>{id}</p>
// <p>-25.00 </p>
// <p>22 July </p>
// <p>{remoteAccess.toString()} </p>
// <p>{problem.toString()}</p>
