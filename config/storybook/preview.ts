import type { Preview } from "@storybook/react";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";
import i18n from "../../src/shared/config/i18n/configForStorybook";
import { withRouterDecorator } from "@shared/helpers/storybook/withRouterDecorator";

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
  decorators: [styleDecorator(), withRouterDecorator],
};

export default preview;
