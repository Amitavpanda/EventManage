"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookNowFormSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        nameBookNow: (0, zod_1.string)({
            required_error: "Name is required",
        }),
        phoneNumberBookNow: (0, zod_1.string)({
            required_error: "Phone number  Book Now is required",
        }).min(10, "Phone number should be at least 10 digit long"),
        budget: (0, zod_1.string)(),
        category: (0, zod_1.string)({
            required_error: "Category is required",
        }),
        requirements: (0, zod_1.string)(),
        startDateTime: (0, zod_1.string)(),
        endDateTime: (0, zod_1.string)(),
        guestsNumber: (0, zod_1.string)()
    }),
};
exports.bookNowFormSchema = (0, zod_1.object)(Object.assign({}, payload));
