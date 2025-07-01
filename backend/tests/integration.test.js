const request = require("supertest");

describe("Tests d’intégration API /tasks", () => {
    let token = null;

    beforeAll(async () => {
        const res = await request("http://localhost:3001")
            .post("/api/auth/login")
            .send({ email: "admin@test.com", password: "password" });

        token = res.body.token;
    });

    test("POST /api/tasks crée une tâche", async () => {
        const res = await request("http://localhost:3001")
            .post("/api/tasks")
            .set("Authorization", `Bearer ${token}`)
            .send({
                title: "Tâche test",
                description: "Description test",
                priority: "high",
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("title", "Tâche test");
        expect(res.body).toHaveProperty("priority", "high");
    });

    test("GET /api/tasks retourne les tâches", async () => {
        const res = await request("http://localhost:3001")
            .get("/api/tasks")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
