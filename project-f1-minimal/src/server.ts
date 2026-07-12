import { buildServer } from "./app";

async function start() {
  const server = await buildServer();
  const port = Number(process.env.PORT) || 3333;

  await server.listen({ port, host: "0.0.0.0" });
  console.log(`server init on port ${port}`);
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});