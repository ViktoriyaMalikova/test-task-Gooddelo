import { DATA__LOAD, STATE__ISEXCEED, STATE__ISNORMAL } from "./types";
import { MAXIMUM_PPM, MAXIMUM_TEMP } from "../utils/constants";

export function isNormal() {
  return {
    type: STATE__ISNORMAL,
  };
}
export function isExceeding() {
  return {
    type: STATE__ISEXCEED,
  };
}

export function dataLoad() {
  return async (dispatch) => {
    const response = await fetch("http://dushnila.gooddelo.com/data");
    const jsonData = await response.json();

    if (jsonData.temp >= MAXIMUM_TEMP || jsonData.co2 >= MAXIMUM_PPM) {
      dispatch(isExceeding());
    } else {
      dispatch(isNormal());
    }

    dispatch({
      type: DATA__LOAD,
      data: jsonData,
    });
  };
}
