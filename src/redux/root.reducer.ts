import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { blacklistReducer, whitelistReducer } from "./control/control.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["store"],
  blacklist: ["temp"],
};

const rootReducer = combineReducers({
  store: whitelistReducer,
  temp: blacklistReducer,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
