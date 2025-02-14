const request = require("supertest");
const mongoose = require("mongoose");
const { app, server } = require("../app");

describe("POST /api/favorites", () => {
  it("should return 400 if productId is not provided", async () => {
    const response = await request(app).post("/api/favorites").send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Product ID is required.");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
