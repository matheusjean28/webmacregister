

const EmpytMacList = ( ) => {
    return <>
    <div className="MacListEmpytList">
      <img className="notfound" src="/notfound.png" />
      <h4>YOU DON'T HAVE ANY MACS SAVED YET! </h4>
      <button
        onClick={(e) => {
          handleCreate(e);
        }}
        className="MacListEmpytListButton"
      >
        Create Mac
      </button>
    </div>
  </>
}

export default EmpytMacList;