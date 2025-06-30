import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";

describe("test Sidebar", () => {
  test("with only first param", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("with toggle button use", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    const toggle = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggle);

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
