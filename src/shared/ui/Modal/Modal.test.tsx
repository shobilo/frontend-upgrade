import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("test shared Modal", () => {
  test("without params", () => {
    render(
      <Modal isOpen>
        <div>TEST</div>
      </Modal>,
    );
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
