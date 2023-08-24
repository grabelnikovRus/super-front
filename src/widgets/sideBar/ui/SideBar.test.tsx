import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SideBar } from "./SideBar";
import { renderComponent } from "@shared/helpers/test/renderComponent";

describe("SideBar", () => {
  test("presence sidebar", () => {
    renderComponent(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("collapsed sidebar", async () => {
    renderComponent(<SideBar />);
    await userEvent.click(screen.getByTestId("toggle-sidebar"));
    expect(screen.getByTestId("sidebar")).toHaveClass("sidebar__collapsed");
  });
});
