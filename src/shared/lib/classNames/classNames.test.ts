import { classNames } from "./classNames";

describe("test classNames", () => {
  test("with only first param", () => {
    const expected = "test";
    expect(classNames("test", {}, [])).toBe(expected);
  });

  test("with additional class", () => {
    const expected = "test additional";
    expect(classNames("test", {}, ["additional"])).toBe(expected);
  });

  test("with modifiers", () => {
    const expected = "test hover";
    expect(classNames("test", { hover: true }, [])).toBe(expected);
  });

  test("with modifiers and additional class", () => {
    const expected = "test additional hover";
    expect(classNames("test", { hover: true }, ["additional"])).toBe(
      expected,
    );
  });

  test("with undefined modifiers", () => {
    const expected = "test";
    expect(classNames("test", undefined, [])).toBe(expected);
  });
});
