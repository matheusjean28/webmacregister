const data = {
  //MOCK DATA
  id: 0,
  model: "teste",
  mac: "teste",
  remoteAccess: true,
  problem: [
    {
      id: 0,
      name: "teste",
      description: "teste",
    },
  ],
  usedAtWrapper: [
    {
      id: 0,
      name: "teste",
    },
  ],
};

const ERROR_MESSAGES = {
  invalidModel: "Provide a valid model",
  invalidMac: "Provide a valid MAC address",
  invalidDescription: "Provide a valid problem description",
};

function handleFieldLength(field = "") {
  //CHECK: if field is diferent than string AND OR diferent than zero or five
  try {
    if (typeof field !== "string") {
      throw new Error("Field must be a string");
    }
    if (field.length === 0 || field.length < 5) {
      console.error(ERROR_MESSAGES.invalidModel);
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function CreateDevice(data) {
  //promisify function later
  console.log(data);
  if (
    handleFieldLength(data.model) &&
    handleFieldLength(data.mac) &&
    handleFieldLength(data.problem[0].description)
  ) {
    console.log("Validation true");
    //   await ( 'http://localhost:5242/CreateDevice') api route post to create device
  } else {
    console.error("field error");
  }
}

export default CreateDevice;
