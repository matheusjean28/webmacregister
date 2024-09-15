function FiltredArray(array, value) {
  if (!Array.isArray(array)) {
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

      break;

    case "Cliente":
      FiltredArray(array, value);
      "Cliente";
      break;

    case "Problem":
      FiltredArray(array, value);
      break;

    case "Already Used":
      FiltredArray(array, value);

      break;

    default:
      "";
      break;
  }
}

function GetItemByIdAtList(array, id) {
  if (!Array.isArray(array)) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      console.log("item selected", id)
      return i;
    }
  }

  return -1;
}

export default { FiltredArray, FilterType, GetItemByIdAtList };
