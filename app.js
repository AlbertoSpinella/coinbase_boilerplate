import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import { coinbasePlugin } from "./routes/coinbase/plugin.js";

const app = Fastify({logger: true});

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "coinbase-api" },
        tags: [
            {name: "Checkout", description: "Checkout"},
            {name: "Charge", description: "Charge"},
            {name: "Event", description: "Event"},
            {name: "Webhook", description: "Webhook"}
        ]
    },
});

app.register(coinbasePlugin, {
    prefix: "/coinbase"
});

export default app;