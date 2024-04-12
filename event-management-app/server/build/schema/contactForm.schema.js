"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFormSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
        }),
        email: (0, zod_1.string)(),
        phoneNumber: (0, zod_1.string)({
            required_error: "Phone number is required",
        }).min(10, "Phone number should be at least 10 digit long").max(14, "Phone Number should not be greater than 14 digits"),
        message: (0, zod_1.string)({
            required_error: "Message is required, We would love to hear about your message",
        }),
    }),
};
exports.contactFormSchema = (0, zod_1.object)(Object.assign({}, payload));
