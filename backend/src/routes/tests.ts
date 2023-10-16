import { Elysia } from "elysia"
import type { Handler, Context } from "elysia"

const contextHandler: Handler = (context: Context) => {
  return context
}

const pathLogger = (context: any) => {
  console.log(context.path)
}

export const testRoutes = new Elysia({ prefix: "/tests" })
  .get("/", () => "test")
  .get("/:stuff", ({ params: { stuff } }) => stuff)
  .get("/context", (context) => contextHandler(context), { beforeHandle: pathLogger})