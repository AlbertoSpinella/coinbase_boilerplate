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

import rawBody from "fastify-raw-body";

app.register(rawBody, {
    field: 'rawBody', // change the default request.rawBody property name
    global: false, // add the rawBody to every request. **Default true**
    encoding: 'utf8', // set it to false to set rawBody as a Buffer **Default utf8**
    runFirst: true // get the body before any preParsing hook change/uncompress it. **Default false**
});

app.register(coinbasePlugin, {
    prefix: "/coinbase"
});

app.register((fastify, options, done) => {
    try {
        fastify.get("/", {}, (req, res) => {
            res.send("Hello world!");
        });
        done();
    } catch (error) {
        throw error;
    }
});

export default app;