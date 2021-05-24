// types
import { DeviceType } from "../types";
// constants, utils
import { SCREEN_MIN_DESKTOP_WIDTH_PX } from "../constants";

const recognizeDeviceType = (): DeviceType => {
  const screenWidth = window?.innerWidth;

  return screenWidth && screenWidth >= SCREEN_MIN_DESKTOP_WIDTH_PX
    ? DeviceType.DESKTOP
    : DeviceType.MOBILE;
};

export default recognizeDeviceType;
