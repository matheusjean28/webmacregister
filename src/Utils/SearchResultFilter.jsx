/**
 * get user imput and return your search if it exists
 *
 * @param {Array} params - user input.
 * @param {Array} array - Array which contains that data.
 * @param {Function} statesHandle - State handler, UseState-like.
 * @param {Array} parmsFound array that contains data found at search func
 */
function SearchResultFilter(params = "", array = [], statesHandle = () => {}) {
  console.log("called rigth here!");

  try {
    if (params.length === 0 || array.length === 0) {
      throw new Error("Params or Array must have data");
    }

    var ShouldReturnedValidData = [];
     array.forEach((item, index) => {
      item = Object.values(item);

      // check if item is igual to the params searched
      item.forEach((element) => {
        if (element === params) {
          var itemPosition = array[index]
          ShouldReturnedValidData.push(itemPosition);
          return ShouldReturnedValidData;
        }
      });
    });
    
    // missing set state with this data;
    return ShouldReturnedValidData;
  } catch (error) {
    console.error(error);
  }
  return;
}

export default SearchResultFilter;
