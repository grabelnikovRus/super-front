import { type JSXElementConstructor, type ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import config from "../../config/i18n/configForTest"

interface renderComponentoptionsTupe {
  router?: string | string[]
}

export const renderComponent = (
  MyComponent: ReactElement<any, string | JSXElementConstructor<any>>,
  options: renderComponentoptionsTupe = {}
) => {
  const { router = "/" } = options;

  render(
    <MemoryRouter initialEntries={typeof router === "string" ? [router] : router}>
      <I18nextProvider i18n={config} >
        {MyComponent}
      </I18nextProvider>
    </MemoryRouter>
  )
}
