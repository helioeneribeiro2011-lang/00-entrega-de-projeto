import fastify from "fastify";
import cors from "@fastify/cors";
import { registerDriversRoutes } from "./routes/drivers";
import { registerTeamsRoutes } from "./routes/teams";

export async function buildServer() {
  const server = fastify({ logger: true });

  await server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  });

  server.get("/health", async (_request, reply) => {
    reply.type("application/json").code(200);
    return { status: "ok" };
  });

  await registerTeamsRoutes(server);
  await registerDriversRoutes(server);

  return server;
}
