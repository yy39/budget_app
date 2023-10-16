export const requestLogger = (context: any) => {
  if (context.params) {
    console.log(context.request.method, context.path, context.params, context.query)
  } else {
    console.log(context.request.method, context.path, context.query)
  }
}