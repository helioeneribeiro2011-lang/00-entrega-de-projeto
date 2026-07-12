import type { FastifyInstance } from "fastify";
import { drivers, type DriverParams } from "../data";

export async function registerDriversRoutes(server: FastifyInstance) {
  server.get("/drivers", async (_request, reply) => {
    reply.type("application/json").code(200);
    return { drivers };
  });

  server.get<{ Params: DriverParams }>("/drivers/:id", async (request, reply) => {
    const id = Number.parseInt(request.params.id, 10);
    const driver = drivers.find((item) => item.id === id);

    if (!driver) {
      reply.type("application/json").code(404);
      return { error: "Driver not found" };
    }

    reply.type("application/json").code(200);
    return { driver };
  });
}
