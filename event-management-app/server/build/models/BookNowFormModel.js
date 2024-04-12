"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstuvwxzy0123456789", 10);
const BookNowFormSchema = new mongoose_1.default.Schema({
    bookNowFormId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },
    nameBookNow: { type: String, required: false },
    phoneNumberBookNow: { type: String, required: false },
    budget: { type: String },
    category: { type: String },
    requirements: { type: String },
    startDateTime: { type: String },
    endDateTime: { type: String },
    guestsNumber: { type: String },
}, {
    timestamps: true,
});
const BookNowFormModel = mongoose_1.default.model("Book Now Form", BookNowFormSchema);
exports.default = BookNowFormModel;
