import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "@shared/helpers/test/renderWithTranslation";

describe("SideBar", () => {
  test("presence sidebar", () => {
    renderWithTranslation(<SideBar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  test("collapsed sidebar", async () => {
    renderWithTranslation(<SideBar />)
    await userEvent.click(screen.getByTestId("toggle-sidebar"))
    expect(screen.getByTestId("sidebar")).toHaveClass("sidebar__collapsed")
  })
});