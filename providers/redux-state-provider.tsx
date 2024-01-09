"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./../redux/store";

interface ReduxProviderType {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderType) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
