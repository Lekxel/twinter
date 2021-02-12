import { SET_USER, SET_HISTORY, SET_THEME } from "./control.types";
import { State } from "../../types/redux";
import { AnyAction } from "redux";

const INITIAL_STATE: State = {
  user: null,
  theme: "light",
};
export const blacklistReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const whitelistReducer = (
  state: State = INITIAL_STATE,
  action: AnyAction
): State => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: typeof action.payload != "string" ? action.payload : null,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload ? "light" : "dark",
      };
    default:
      return state;
  }
};
