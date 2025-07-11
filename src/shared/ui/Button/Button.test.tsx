import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("test shared Button", () => {
  test("without params", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with theme param", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
