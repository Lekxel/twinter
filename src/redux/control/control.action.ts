import { SET_USER, SET_THEME } from "./control.types";

import { User } from "../../types/user";
import { Theme } from "../../types/misc";

const setUser = (payload: User | null) => {
  return {
    // key: SET_USER,
    type: SET_USER,
    payload,
  };
};

// const setHistory = (payload) => {
//   return {
//     type: SET_HISTORY,
//     payload,
//   };
// };

const setTheme = (payload: Theme) => {
  return {
    type: SET_THEME,
    payload,
  };
};

export { setUser, setTheme };
