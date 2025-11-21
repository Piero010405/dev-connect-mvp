// tests/integration/project.integration.test.ts
import request from "supertest";
import app from "../../src/server";

describe("Project API", () => {
  it("creates a project", async () => {
    const res = await request(app)
      .post("/api/projects")
      .send({ title: "New Project", budget: 800 });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("New Project");
  });
});
