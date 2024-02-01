import type { Preview } from "@storybook/react";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";
import i18n from "../../src/shared/config/i18n/configForStorybook";
import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
  globals: {
    locale: "en",
    locales: {
      en: "English",
      ru: "Русский",
    },
  },
  decorators: [withRouter, styleDecorator()],
};

export default preview;
