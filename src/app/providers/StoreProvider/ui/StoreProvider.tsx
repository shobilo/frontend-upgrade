import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/shared/config/storeConfig/storeConfig";
import { StateSchema } from "@/shared/config/storeConfig/StateSchema";

interface StoreProviderProps {
    initialState?: StateSchema;
    children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ initialState, children }) => {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
