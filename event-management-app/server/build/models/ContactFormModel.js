"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstuvwxzy0123456789", 10);
const ContactFormSchema = new mongoose_1.default.Schema({
    contactFormId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },
    name: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true,
});
const ContactFormModel = mongoose_1.default.model("Contact Form", ContactFormSchema);
exports.default = ContactFormModel;
