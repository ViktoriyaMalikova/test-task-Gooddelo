import { DATA__LOAD } from "./types";

const initialState = {
  data: {},
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA__LOAD:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
