import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";
import { renderComponent } from "@shared/helpers/test/renderComponent";

describe("Counter", () => {
  test("Counter increment", async () => {
    const initalState = { counter: { value: 10 } };
    renderComponent(<Counter />, { initalState });
    await userEvent.click(screen.getByTestId("increment"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("Counter decrement", async () => {
    const initalState = { counter: { value: 10 } };
    renderComponent(<Counter />, { initalState });
    await userEvent.click(screen.getByTestId("decrement"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
