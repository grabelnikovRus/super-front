import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("presence button", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  test("presence button", () => {
    render(<Button theme="xl">Test</Button>);
    expect(screen.getByText(/test/i)).toHaveClass("xl");
  });
});
