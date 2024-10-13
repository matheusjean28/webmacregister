/**
 * filter for an id on the whole macs and delete selected mac
 * return a new array without item deleted
 *
 * @param {string} id - id of mac to be deleted.
 * @param {Array} array_of_macs array with whole macs
 */
export default function RemoveMac(id = "aaaa", array_of_macs = []) {
  try {
    if (id.length === 0 || id === "") {
      console.log("igual zero");
      throw new Error("Invalid Mac Id");
    }

    const new_array_filtred = array_of_macs.filter((item) => item.id !== id);//check if item is igual id

    return new_array_filtred;
  } catch (error) {
    console.error("error logging_ :", error.message);
    throw error;
  }
}
