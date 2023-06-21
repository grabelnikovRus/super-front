import { type PartialStoryFn, type Renderer, type Args } from "@storybook/csf";
import { type ThemeType } from "@app/providers/themeProviders";
import { useEffect } from "react";

import "../../../app/styles/index.scss";

export const styleDecorator = (theme: ThemeType = "light") =>
  (story: PartialStoryFn<Renderer, Args>) => {
    useEffect(() => {
      document.body.classList.remove(theme === "light" ? "dark" : "light")
      document.body.classList.add(theme)
      return () => { document.body.classList.remove("light", "dark") }
    }, [theme])

    return <>{story()}</>
  }
