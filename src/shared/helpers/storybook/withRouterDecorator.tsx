import { type PartialStoryFn, type Renderer, type Args } from "@storybook/csf";
import { BrowserRouter } from "react-router-dom";

export const withRouterDecorator = (story: PartialStoryFn<Renderer, Args>) => (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
)
