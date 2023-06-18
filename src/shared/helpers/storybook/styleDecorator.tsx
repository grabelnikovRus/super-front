import { type PartialStoryFn, type Renderer, type Args } from "@storybook/csf";
import { classNames } from "../classNames";

import "../../../app/styles/index.scss";
import { type ThemeType } from "@app/providers/themeProviders";

export const styleDecorator = (theme: ThemeType = "light") =>
  (story: PartialStoryFn<Renderer, Args>) => (
    <div className={classNames("app", theme)}>
      {story()}
    </div>
  )
