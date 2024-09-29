function ParseStringToFloat(_toFloat = "") {
  if (_toFloat == null || typeof _toFloat !== "string") {
    return null;
  }

  try {
    if (_toFloat.length > 5) {
      return (_toFloat = _toFloat.substring(0, 5));
    }

    const parsedValue = parseFloat(_toFloat.trim());

    if (isNaN(parsedValue)) {
      return null;
    }

    return parsedValue.toFixed(2);
  } 
  
  catch (error) {
    console.error("Error at parsing to float", error);
    return null;
  }
}

export default ParseStringToFloat;
