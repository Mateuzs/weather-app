// types
import { DeviceType } from "../types";

const buildMapContainerStyleObject = (deviceType: DeviceType) => {
  switch (deviceType) {
    case DeviceType.DESKTOP:
      return { height: "500px", width: "500px" };
    case DeviceType.MOBILE:
      return { height: "300px", width: "300px" };
  }
};

export default buildMapContainerStyleObject;
