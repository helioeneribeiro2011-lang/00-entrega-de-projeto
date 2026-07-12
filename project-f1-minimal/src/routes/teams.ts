import type { FastifyInstance } from "fastify";
import { teams } from "../data";

export async function registerTeamsRoutes(server: FastifyInstance) {
  server.get("/teams", async (_request, reply) => {
    reply.type("application/json").code(200);
    return { teams };
  });
}
