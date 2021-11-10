import coinbase from "coinbase-commerce-node";
const  Client = coinbase.Client;

const { API_KEY, WEBHOOK } = process.env;

const clientObj = Client.init(API_KEY);

const { Checkout, Charge, Event } = coinbase.resources;
const Webhook = coinbase.Webhook;

export const checkoutList = async () => {
    try {
        console.log("Checkout List...");
        const res = await Checkout.list({order: 'asc', limit: 2}, (error, list, pagination) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const checkoutAll = async () => {
    try {
        console.log("Checkout All...");
        const res = await Checkout.all({order: 'asc'}, (error, list) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const checkoutCreate = async (checkoutData) => {
    try {
        console.log("Checkout Create...");
        const res = await Checkout.create(checkoutData, (error, response) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const checkoutDelete = async (checkoutId) => {
    try {
        console.log("Checkout Delete...");
        const res = await Checkout.deleteById(checkoutId, (error, response) => {
            // if (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};


export const chargeList = async () => {
    try {
        console.log("Charge List...");
        const res = await Charge.list({}, (error, list, pagination) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const chargeAll = async () => {
    try {
        console.log("Charge All...");
        const res = await Charge.all({}, (error, list) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const chargeAllCompleted = async () => {
    try {
        console.log("Charge All Completed...");
        const res = await Charge.all({}, (error, list) => {
            // if  (error) throw error;
        });
        const result = [];
        res.forEach(el => {
            if (el.payments.length != 0) {
                result.push({name: el.name, code: el.code, payments: el.payments});
            }
        });
        return result;
    } catch (err) {
        throw err;
    }
};

export const chargeCreate = async (chargeData) => {
    try {
        console.log("Charge Create...");
        const res = await Charge.create(chargeData, (error, response) => {
            // if  (error) throw error;
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const eventList = async () => {
    try {
        console.log("Event List...");
        const res = Event.list({limit: 5}, (error, list, pagination)  => {
            console.log(error, list, pagination);
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const eventAll = async () => {
    try {
        console.log("Event All...");
        const res = Event.all({}, (error, list)  => {
            console.log(error, list);
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const webhookVerify = (request) => {
    try {
        console.log("REQUEST:", request);
        console.log("RAWBODY:", request.rawBody);
        const event = Webhook.verifyEventBody(
			request.rawBody,
			request.headers['x-cc-webhook-signature'],
			WEBHOOK
		);
        if (event.type === 'charge:created') {
            console.log("CREATED", event);
        }
        else if (event.type === 'charge:pending') {
            console.log("PENDING", event);
        }
        else if (event.type === 'charge:confirmed') {
            console.log("CONFIRMED", event);
        }
        else if (event.type === 'charge:failed') {
            console.log("FAILED", event);
        }
        else {
            console.log("NOT Charge Created-Pending-Confirmed-Failed", event);
        }
        return event;
        
    } catch (err) {
        throw err;
    }
};