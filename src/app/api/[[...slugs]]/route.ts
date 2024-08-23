import { Elysia } from "elysia";

import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";

import { authController } from "./controllers/auth.controller";
const app = new Elysia({ prefix: "/api" })
  .use(swagger())
  .use(cors())
  .group("", {}, (app) => app.use(authController));

export const GET = app.handle;
export const POST = app.handle;

export type API = typeof app;
