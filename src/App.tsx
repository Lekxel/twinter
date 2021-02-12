import "./App.css";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./routes";
import { store, persistor } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
