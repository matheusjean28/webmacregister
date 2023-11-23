function FiltredArray(array, value) {
  if (!Array.isArray(array)) {
    // console.error("Invalid input: Array expected");
    return [];
  }
  //before finesh, check if has duplicate kays inside accomulator
  //once have, remove them and return array clean to user
  const filtredArrayWithIndex = array.reduce((accumulator, element, index) => {
    for (const key in element) {
      if (String(element[key]).includes(value)) {
        accumulator.push(element);
      }
    }
    return accumulator;
  }, []);

  return filtredArrayWithIndex;
}

function FilterType(value, array) {
  switch (value) {
    case "Model":
      FiltredArray(array, value);
      // console.log("Model");

      break;

    case "Cliente":
      FiltredArray(array, value);
      "Cliente";
      break;

    case "Problem":
      FiltredArray(array, value);
      // console.log("Problem");
      break;

    case "Already Used":
      FiltredArray(array, value);
      // console.log("Already Used");

      break;

    default:
      "";
      break;
  }
}

function GetItemByIdAtList(array, id) {
  if (!Array.isArray(array)) {
    // console.error("Invalid input: Array expected");
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      // console.log(i)
      return i;
    }
  }

  // console.error("Item not found");
  return -1;
}

export default { FiltredArray, FilterType, GetItemByIdAtList };
