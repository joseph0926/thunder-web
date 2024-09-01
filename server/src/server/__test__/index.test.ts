import MonitorServer from "@/server";
import express from "express";
import request from "supertest";

describe("GET /health", () => {
  let app: express.Express;
  let serverInstance: MonitorServer;

  beforeAll(async () => {
    app = express();
    serverInstance = new MonitorServer(app);
    await serverInstance.start();
  });

  afterAll(async () => {
    await serverInstance.close();
  });

  it('should return a message "Thunder service is healthy and OK"', async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Thunder service is healthy and OK");
  });
});
