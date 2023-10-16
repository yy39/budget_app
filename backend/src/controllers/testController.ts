import type { Handler, Context } from "elysia"

export const contextHandler: Handler = (context: Context) => {
  return context
}

export const pathLogger = (context: any) => {
  console.log(context.path)
}