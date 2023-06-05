import { render } from "@testing-library/react";
import { type JSXElementConstructor, type ReactElement, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import config from "../../config/i18n/configForTest"

export const renderWithTranslation = (MyComponent: ReactElement<any, string | JSXElementConstructor<any>>) => (
  render(
        <Suspense fallback="load">
            <I18nextProvider i18n={config} >
                {MyComponent}
            </I18nextProvider>
        </Suspense>
  )
)
