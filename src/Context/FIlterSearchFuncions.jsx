function FiltredArray(array, value) {
  if (!Array.isArray(array)) {
    console.error('Invalid input: Array expected');
    return [];
  }

  const filtredArrayWithIndex = array.reduce((accumulator, element, index) => {
    for (const key in element) {
      if (String(element[key]).includes(value)) {
        accumulator.push(element );
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
