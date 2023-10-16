import { Elysia } from "elysia"
import { contextHandler } from "../controllers/testController"
import { requestLogger } from "../middleware/requestLogger"

export const testRoutes = new Elysia({ prefix: "/tests" })
  .get("/", () => "test", { beforeHandle: requestLogger })
  .get("/:stuff", ({ params: { stuff } }) => stuff, { beforeHandle: requestLogger })
  .get("/context", (context) => contextHandler(context), { beforeHandle: requestLogger })