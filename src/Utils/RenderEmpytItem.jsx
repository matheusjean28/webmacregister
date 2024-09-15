import { MonitorX } from "lucide-react";

const RenderEmpytItem = (item) => {
  try {//if item is null or a empyt string, then it will be replaced by a orange icon of the monitor with X inside
    if (item == null || item == "") {
      return <MonitorX  size={15} color="orange"/>;
    } else {
      return item;
    }
  } catch (error) {
    console.error(error);
  }
};


export default RenderEmpytItem