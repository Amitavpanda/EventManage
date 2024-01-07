import mongoose, { Mongoose } from "mongoose";
import { customAlphabet } from "nanoid";
import logger from "../utils/logger";
import path from "path";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxzy0123456789", 10);

const appLogger = logger.child({ filename: path.basename(__filename) });



export interface ContactFormInput {
    name: string,
    email: string,
    phoneNumber: string,
    message: string,

}


export interface ContactFormDocument extends ContactFormInput, mongoose.Document{
    createdAt: Date,
}

const ContactFormSchema = new mongoose.Schema({
    contactFormId: {
        type : String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },

    name: {type: String, required: true },
    email: {type: String},
    phoneNumber: {type: String, required: true},
    message: {type: String, required: true},

},
{
    timestamps: true,
}
);

const ContactFormModel = mongoose.model<ContactFormDocument>("Contact Form", ContactFormSchema);

export default ContactFormModel;