/**
 * get user imput and return your search if it exists
 *
 * @param {Array} params - user input.
 * @param {Array} array - Array which contains that data.
 * @param {Function} statesHandle - State handler, UseState-like.
 * @param {Array} parmsFound array that contains data found at search func
 */
function SearchResultFilter(params = "", array = []) {
  console.log("called rigth here!");

  try {
    if (params.length === 0 || array.length === 0) {
      throw new Error("Params or Array must have data");
    }

    var ShouldReturnValidData = [];
    var lowerCaseParam = params.toLowerCase();
    array.forEach((item, index) => {
      item = Object.values(item);

      // check if item is igual to the params searched
      //Also convert all elements to lowercase and check if any element matches the params
      item.forEach((element) => {
        var lowerCaseElement = String(element).toLowerCase();
        if (lowerCaseElement.includes(lowerCaseParam)) {
          var itemPosition = array[index];
          if (ShouldReturnValidData.includes(itemPosition)) {
            return;
          } else {
            ShouldReturnValidData.push(itemPosition);
            return ShouldReturnValidData;
          }
        }
      });
    });

    // missing set state with this data;
    console.log(ShouldReturnValidData);
    return ShouldReturnValidData;
  } catch (error) {
    console.error(error);
  }
  return;
}

export default SearchResultFilter;
