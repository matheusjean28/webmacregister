const RigthBar = (fieldsToRender) => {
  console.log(fieldsToRender);
  const { field, data } = fieldsToRender.labelToRender;

  const parseArray = (item) => {
    try {
      var item = Array.from(item);
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  const handleParamsToRender = () => {
    if (field == "usedIn") {
      return parseArray(data).map((e) => {
        return `\n\n${e.name};`;
      });
    }
    if (field == "problem") {
      return parseArray(data).map((e) => {
        return e;
      });
    }
  };

  return <div className="RightConteinerSpan">{handleParamsToRender()}</div>;
};

export default RigthBar;
