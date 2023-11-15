function FiltredArray (array, value) {
    
    var FiltredArrayItems = array.filter(value,(element ) => {
        if(element == value){
            console.log(value)
        }
    })
    return FiltredArrayItems
}

function FilterType(value, array) {
    switch (value) {
    case "Model":
        FiltredArray (array, value)
      break;

    case "Cliente":
        FiltredArray (array, value)
      break;

    case "Problem":
        FiltredArray (array, value)
      break;

    case "Already Used":
        FiltredArray (array, value)
      break;

    default:
      "";
      break;
  }
}
