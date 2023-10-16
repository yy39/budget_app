import { Elysia } from "elysia"
import { testRoutes } from "./routes/tests"

const port: number = parseInt(Bun.env.PORT as string)

const app = new Elysia({ prefix: "/api" })
  .use(testRoutes)
  .listen(port)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
