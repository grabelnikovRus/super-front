import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/buildCssLoader";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { buildSvgLoader } from "../../config/build/buildSvgLOader";
import { type Configuration, DefinePlugin } from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock",
    "storybook-react-i18next",
    "storybook-addon-react-router-v6"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }): Promise<Configuration> => {
    if (config.resolve?.plugins) config.resolve.plugins = [new TsconfigPathsPlugin()];
    else if (config.resolve) config.resolve.plugins = [new TsconfigPathsPlugin()];

    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        if (
          rule !== "..." &&
          rule.test instanceof RegExp &&
          rule.test.toString().includes("svg")
        ) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });

      config.module.rules.push(buildCssLoader(false));
      config.module.rules.push(buildSvgLoader());
    }

    config.plugins?.push(
      new DefinePlugin({
        _IS_DEV_: false,
        _API_: JSON.stringify("http://localhost:6006"),
        _PROJECT_: JSON.stringify("storybook"),
      })
    );

    return config;
  },
};
export default config;
