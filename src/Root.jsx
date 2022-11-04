import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import App from "./App.jsx";

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App data-testid="App" />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
