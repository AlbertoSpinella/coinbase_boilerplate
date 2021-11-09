import {
    checkoutList,
    checkoutAll,
    checkoutCreate,
    checkoutDelete,
    chargeList,
    chargeAll,
    chargeCreate,
    eventAll,
    webhookVerify
} from "../../libs/coinbase.js";

export const coinbaseCheckoutList = async (req, res) => {
    try {
        const result = await checkoutList();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseCheckoutAll = async (req, res) => {
    try {
        const result = await checkoutAll();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseCheckoutCreate = async (req, res) => {
    try {
        const { body } = req;
        const result = await checkoutCreate(body);
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseCheckoutDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await checkoutDelete(id);
        return res.send(result);
    } catch (err) {
        throw err;
    }
};


export const coinbaseChargeList = async (req, res) => {
    try {
        const result = await chargeList();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseChargeAll = async (req, res) => {
    try {
        const result = await chargeAll();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseChargeCreate = async (req, res) => {
    try {
        const { body } = req;
        const result = await chargeCreate(body);
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseEventList = async (req, res) => {
    try {
        const result = await eventList();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseEventAll = async (req, res) => {
    try {
        const result = await eventAll();
        return res.send(result);
    } catch (err) {
        throw err;
    }
};

export const coinbaseWebhookVerify = async (req, res) => {
    try {
        const result = await webhookVerify(req);
        return res.send(result);
    } catch (err) {
        throw err;
    }
};