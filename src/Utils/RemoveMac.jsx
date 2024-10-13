/**
 * filter for an id on the whole macs and delete selected mac
 *
 * @param {string} id - id of mac to be deleted.
 * @param {Array} array_of_macs array with whole macs
 */
export default function RemoveMac(id = "", array_of_macs = []) {
    try {
      if (id.length === 0 || id === '') {
        console.log("igual zero");
        throw new Error("Invalid Mac Id");
      }
      if (array_of_macs.length === 0) {
        console.log("array length less than 0");
        return [0];
      }
      
    } catch (error) {
      console.error("error logging_ :", error.message);
      throw error; 
    }
  }