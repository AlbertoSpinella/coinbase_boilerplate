import {
    coinbaseCheckoutListOpts,
    coinbaseCheckoutAllOpts,
    coinbaseCheckoutCreateOpts,
    coinbaseCheckoutDeleteOpts,
    coinbaseChargeListOpts,
    coinbaseChargeAllOpts,
    coinbaseChargeCreateOpts,
    coinbaseEventListOpts,
    coinbaseEventAllOpts,
    coinbaseWebhookVerifyOpts
} from "./schema.js";

export const coinbasePlugin = (fastify, options, done) => {
    try {
        fastify.get("/checkout/list", coinbaseCheckoutListOpts);
        fastify.get("/checkout/all", coinbaseCheckoutAllOpts);
        fastify.post("/checkout/create", coinbaseCheckoutCreateOpts);
        fastify.delete("/checkout/delete/:id", coinbaseCheckoutDeleteOpts);

        fastify.get("/charge/list", coinbaseChargeListOpts);
        fastify.get("/charge/all", coinbaseChargeAllOpts);
        fastify.post("/charge/create", coinbaseChargeCreateOpts);

        fastify.get("/event/list", coinbaseEventListOpts);
        fastify.get("/event/all", coinbaseEventAllOpts);

        fastify.post("/webhook/verify", coinbaseWebhookVerifyOpts);

        done();
    } catch (err) {
        throw err;
    }
};