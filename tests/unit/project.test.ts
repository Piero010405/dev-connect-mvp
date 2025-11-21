// tests/unit/project.test.ts
import { validateProject } from "../../src/modules/project/service";

describe("Project Validation", () => {
  test("fails with missing fields", () => {
    expect(() => validateProject({ title: "" }))
      .toThrow("Title is required");
  });

  test("creates project with valid input", () => {
    const result = validateProject({ title: "App", budget: 500 });
    expect(result.valid).toBe(true);
  });
});
