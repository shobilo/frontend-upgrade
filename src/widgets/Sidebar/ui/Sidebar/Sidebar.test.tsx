import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

describe("test Sidebar", () => {
  test("with only first param", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("with toggle button use", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    const toggle = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggle);

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
