import mongoose, { Date, Mongoose } from "mongoose";
import { customAlphabet } from "nanoid";
import logger from "../utils/logger";
import path from "path";
import { bookNowFormSchema } from "../schema/bookNowFormSchema";
import { string } from "zod";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxzy0123456789", 10);

const appLogger = logger.child({ filename: path.basename(__filename) });



export interface BookNowFormInput {
    name: string,
    phoneNumber: string,
    budget: string,
    category: string,
    requirements: string,
    startDateTime: string,
    endDateTime: string,
    guestsNumber: string,
}


export interface BookNowFormDocument extends BookNowFormInput, mongoose.Document{
    createdAt: Date,
}

const BookNowFormSchema = new mongoose.Schema({
    bookNowFormId: {
        type : String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },

    name: {type: String, required: true },
    phoneNumber: {type: String, required: true},
    budget: {type: String},
    category : {type: String},
    requirements: {type: String},
    startDateTime: {type: String},
    endDateTime: {type: String},
    guestsNumber: {type: String},

},
{
    timestamps: true,
}
);

const BookNowFormModel = mongoose.model<BookNowFormDocument>("Book Now Form", BookNowFormSchema);

export default BookNowFormModel;