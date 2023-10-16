import { Elysia } from "elysia";

const port: number = parseInt(Bun.env.PORT as string)

const app = new Elysia().get("/", () => "Hello Elysia").listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
