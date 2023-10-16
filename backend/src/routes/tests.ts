import { Elysia } from "elysia"

export const testRoutes = new Elysia({ prefix: "/tests" })
  .get("/", () => "test")
  .get("/:stuff", ({ params: { stuff } }) => stuff)
  .get("/context", (context) => context)
