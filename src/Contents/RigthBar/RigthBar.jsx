const RigthBar = (fieldsToRender) => {
  const { field, data } = fieldsToRender.labelToRender;

  const parseArray = (item) => {
    try {
      if (typeof item === "string") {
        const words = item.trim().split(' ');
        return words.length > 1 ? words : [item]; 
      } else if (Array.isArray(item)) {
        return item;
      } else {
        return [String(item)];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleParamsToRender = () => {

    if (field == "usedIn") {
      return parseArray(data).map((e) => {
        return `${e}`;
      });
    }
    if (field == "problem") {
      return parseArray(data).map((e) => {
        return `\n${e}`;
      });
    }
  };

  return <div className="RightConteinerSpan">{handleParamsToRender()}</div>;
};

export default RigthBar;
