import {
    coinbaseCheckoutList,
    coinbaseCheckoutAll,
    coinbaseCheckoutCreate,
    coinbaseCheckoutDelete,
    coinbaseChargeList,
    coinbaseChargeAll,
    coinbaseChargeAllCompleted,
    coinbaseChargeCreate,
    coinbaseEventList,
    coinbaseEventAll,
    coinbaseWebhookVerify
} from "./controller.js";

export const coinbaseCheckoutListOpts = {
    schema: {
        tags: ['Checkout']
    },
    handler: coinbaseCheckoutList
};

export const coinbaseCheckoutAllOpts = {
    schema: {
        tags: ['Checkout']
    },
    handler: coinbaseCheckoutAll
};

export const coinbaseCheckoutCreateOpts = {
    schema: {
        tags: ['Checkout'],
        body: {
            type: "object",
            required: ["name", "description", "pricing_type", "requested_info"],
            properties: {
                name: { type: "string" },
                description: { type: "string" },
                pricing_type: { type: "string", enum: ["no_price", "fixed_price"] },
                requested_info: { type: "array" }
            }
        }
    },
    handler: coinbaseCheckoutCreate
};

export const coinbaseCheckoutDeleteOpts = {
    schema: {
        tags: ['Checkout']
    },
    handler: coinbaseCheckoutDelete
};


export const coinbaseChargeListOpts = {
    schema: {
        tags: ['Charge']
    },
    handler: coinbaseChargeList
};

export const coinbaseChargeAllOpts = {
    schema: {
        tags: ['Charge']
    },
    handler: coinbaseChargeAll
};

export const coinbaseChargeAllCompletedOpts = {
    schema: {
        tags: ['Charge']
    },
    handler: coinbaseChargeAllCompleted
};

export const coinbaseChargeCreateOpts = {
    schema: {
        tags: ['Charge'],
        body: {
            type: "object",
            required: ["pricing_type"],
            properties: {
                pricing_type: { type: "string", enum: ["no_price", "fixed_price"] },
            }
        }
    },
    handler: coinbaseChargeCreate
};

export const coinbaseEventListOpts = {
    schema: {
        tags: ['Event']
    },
    handler: coinbaseEventList
};

export const coinbaseEventAllOpts = {
    schema: {
        tags: ['Event']
    },
    handler: coinbaseEventAll
};

export const coinbaseWebhookVerifyOpts = {
    config: {
        rawBody: true
    },
    schema: {
        tags: ['Webhook']
    },
    handler: coinbaseWebhookVerify
};