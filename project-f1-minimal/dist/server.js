"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/data.ts
var teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Ferrari", base: "Maranello, Italy" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Visa Cash App RB", base: "Faenza, Italy" },
  { id: 8, name: "Haas", base: "Kannapolis, United States" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Sauber", base: "Hinwil, Switzerland" }
];
var drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Liam Liam Lawson", team: "Red Bull Racing" },
  { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Andrea Kimi Antonelli", team: "Mercedes" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Jack Doohan", team: "Alpine" },
  { id: 13, name: "Yuki Tsunoda", team: "Visa Cash App RB" },
  { id: 14, name: "Isack Hadjar", team: "Visa Cash App RB" },
  { id: 15, name: "Oliver Bearman", team: "Haas" },
  { id: 16, name: "Esteban Ocon", team: "Haas" },
  { id: 17, name: "Alex Albon", team: "Williams" },
  { id: 18, name: "Carlos Sainz", team: "Williams" },
  { id: 19, name: "Gabriel Bortoleto", team: "Sauber" },
  { id: 20, name: "Nico H\xFClkenberg", team: "Sauber" }
];

// src/routes/drivers.ts
function registerDriversRoutes(server) {
  return __async(this, null, function* () {
    server.get("/drivers", (_request, reply) => __async(this, null, function* () {
      reply.type("application/json").code(200);
      return { drivers };
    }));
    server.get("/drivers/:id", (request, reply) => __async(this, null, function* () {
      const id = Number.parseInt(request.params.id, 10);
      const driver = drivers.find((item) => item.id === id);
      if (!driver) {
        reply.type("application/json").code(404);
        return { error: "Driver not found" };
      }
      reply.type("application/json").code(200);
      return { driver };
    }));
  });
}

// src/routes/teams.ts
function registerTeamsRoutes(server) {
  return __async(this, null, function* () {
    server.get("/teams", (_request, reply) => __async(this, null, function* () {
      reply.type("application/json").code(200);
      return { teams };
    }));
  });
}

// src/app.ts
function buildServer() {
  return __async(this, null, function* () {
    const server = (0, import_fastify.default)({ logger: true });
    yield server.register(import_cors.default, {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"]
    });
    server.get("/health", (_request, reply) => __async(this, null, function* () {
      reply.type("application/json").code(200);
      return { status: "ok" };
    }));
    yield registerTeamsRoutes(server);
    yield registerDriversRoutes(server);
    return server;
  });
}

// src/server.ts
function start() {
  return __async(this, null, function* () {
    const server = yield buildServer();
    const port = Number(process.env.PORT) || 3333;
    yield server.listen({ port, host: "0.0.0.0" });
    console.log(`server init on port ${port}`);
  });
}
start().catch((err) => {
  console.error(err);
  process.exit(1);
});
