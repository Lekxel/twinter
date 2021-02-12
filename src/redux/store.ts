import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import { reduxDataReady } from "./onReady";
import { Store } from "redux";
export const store: Store = createStore(rootReducer);

export const persistor = persistStore(store, null, () => reduxDataReady(true));

export default { store, persistor };
