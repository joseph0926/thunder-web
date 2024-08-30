import express, { Express } from "express";
import ThunderServer from "./server";

function initApp(): void {
  const app: Express = express();
  const thunderServer = new ThunderServer(app);
  thunderServer.start();
}

initApp();
