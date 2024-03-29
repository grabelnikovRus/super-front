import { type JSXElementConstructor, type ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { type StateType, createStore } from "@app/providers/storeProvider";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type ReducerObjType } from "../../hooks/useReducerManager";

import config from "../../config/i18n/configForTest";
import { Provider } from "react-redux";

interface renderComponentoptionsTupe {
  router?: string | string[];
  initalState?: DeepPartial<StateType>;
  asyncReducers?: ReducerObjType,
}

export const renderComponent = (
  MyComponent: ReactElement<any, string | JSXElementConstructor<any>>,
  options: renderComponentoptionsTupe = {}
) => {
  const { router = "/", initalState = {}, asyncReducers = {} } = options;

  const store = createStore(initalState as StateType, asyncReducers);

  render(
    <MemoryRouter initialEntries={typeof router === "string" ? [router] : router}>
      <Provider store={store}>
        <I18nextProvider i18n={config}>{MyComponent}</I18nextProvider>
      </Provider>
    </MemoryRouter>
  );
};
