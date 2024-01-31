import { type FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouterDecorator = (Story: FC) => (
  <BrowserRouter><Story /></BrowserRouter>
);
