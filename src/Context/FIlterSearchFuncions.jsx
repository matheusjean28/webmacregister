function FiltredArray(array, value) {
  var filteredArrayWithIndex = array.reduce((accumulator, element, index) => {
    if (String(element).includes(value)) {
      accumulator.push({ index: index, item: element });
    }
    return accumulator;
  }, []);
  console.log("call here", filteredArrayWithIndex)
  return filteredArrayWithIndex;
}

function FilterType(value, array) {
  switch (value) {
    case "Model":
      FiltredArray(array, value);
      console.log("Model");

      break;

    case "Cliente":
      FiltredArray(array, value);
      "Cliente";
      break;

    case "Problem":
      FiltredArray(array, value);
      console.log("Problem");
      break;

    case "Already Used":
      FiltredArray(array, value);
      console.log("Already Used");

      break;

    default:
      "";
      break;
  }
}

export default { FiltredArray, FilterType };
