"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (req, res, next) => {
    try {
        console.log("inside try catch validation");
        console.log(req.body);
        schema.parse({
            body: req.body,
        });
        next(); // Call next to move to the next middleware or route handler
    }
    catch (e) {
        console.log('Validation error: inside catch');
        console.log('Validation errors:', e.errors);
        return res.status(400).send(e.errors);
    }
};
exports.default = validate;
