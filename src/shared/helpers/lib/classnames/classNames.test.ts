import { classNames } from "./classNames"

describe("classNames", () => {
  test("concat class", () => {
    expect(
      classNames("class", "class2", { class3: true, class4: false }, ["class5", "class6"])
    ).toBe("class class2 class3 class5 class6");
  })
});
