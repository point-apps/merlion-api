import express, { Express } from "express";
import authRouter from "./modules/auth/router.js";
import capturesRouter from "./modules/captures/router.js";
import clustersRouter from "./modules/clusters/router.js";
import institutionsRouter from "./modules/institutions/router.js";
import notificationsRouter from "./modules/notifications/router.js";
import reportRouter from "./modules/report/router.js";
import usersRouter from "./modules/users/router.js";

export default async function () {
  const app: Express = express();
  /**
   * Register all available modules
   * <modules>/router.ts
   */
  app.use(`/auth`, authRouter);
  app.use(`/users`, usersRouter);
  app.use(`/clusters`, clustersRouter);
  app.use(`/institutions`, institutionsRouter);
  app.use(`/notifications`, notificationsRouter);
  app.use(`/captures`, capturesRouter);
  app.use(`/report`, reportRouter);

  return app;
}
