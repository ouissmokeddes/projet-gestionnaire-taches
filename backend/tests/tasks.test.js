const request = require("supertest");

describe("GET /tasks (serveur lancé)", () => {
    it("should return a list of tasks", async () => {
        const res = await request("http://localhost:3001").get("/tasks");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
