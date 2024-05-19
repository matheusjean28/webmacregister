import { MonitorX } from "lucide-react";

const RenderEmpytItem = (item) => {
  try {
    if (item == null || item == "") {
      return <MonitorX />;
    } else {
      return item;
    }
  } catch (error) {
    console.error(error);
  }
};


export default RenderEmpytItem