import { STATE__ISEXCEED, STATE__ISNORMAL } from "./types";

const initialState = {
  isNormal: true,
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE__ISEXCEED:
      return {
        ...state,
        isNormal: false,
      };

    case STATE__ISNORMAL:
      return {
        ...state,
        isNormal: true,
      };

    default:
      return state;
  }
};
