
/**
 * get user imput and return your search if it exists
 *
 * @param {Array} params - user input.
 * @param {Array} array - Array which contains that data.
 * @param {Function} statesHandle - State handler, UseState-like.
 */
function SearchResultFilter(params = '', array = [], statesHandle = () => {}) {
  console.log("called rigth here!");

  try {
    if(params.length === 0 || array.length === 0){
        throw new Error ("Params or Array must have data")
    }

    console.log(array)
    console.log(params)
  } catch (error) {
    console.error(error)
  }

  return;
}

export default SearchResultFilter;
