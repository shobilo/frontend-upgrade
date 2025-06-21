import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("test shared Button", () => {
  test("without params", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with theme param", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
