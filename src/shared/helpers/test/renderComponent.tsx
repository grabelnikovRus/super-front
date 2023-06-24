import { type JSXElementConstructor, type ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { type StateType, StoreProvider } from "@app/providers/storeProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

import config from "../../config/i18n/configForTest"

interface renderComponentoptionsTupe {
  router?: string | string[]
  initalState?: DeepPartial<StateType>
}

export const renderComponent = (
  MyComponent: ReactElement<any, string | JSXElementConstructor<any>>,
  options: renderComponentoptionsTupe = {}
) => {
  const {
    router = "/",
    initalState = {}
  } = options;

  render(
    <StoreProvider initialState={initalState as StateType}>
      <MemoryRouter initialEntries={typeof router === "string" ? [router] : router}>
        <I18nextProvider i18n={config} >
          {MyComponent}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
