import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/buildCssLoader";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import { buildSvgLoader } from "../../config/build/buildSvgLOader";
import { type RuleSetRule, type Configuration } from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-react-i18next",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }): Promise<Configuration> => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.module.rules.push(buildCssLoader(configType === "PRODUCTION"));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (rule.test instanceof RegExp && rule.test.toString().includes("svg")) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push(buildSvgLoader());

    return config;
  }
};
export default config;
