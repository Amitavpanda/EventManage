import mongoose, { Date, Mongoose } from "mongoose";
import { customAlphabet } from "nanoid";
import path from "path";
import { bookNowFormSchema } from "../schema/bookNowFormSchema";
import { string } from "zod";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxzy0123456789", 10);




export interface BookNowFormInput {
    nameBookNow: string,
    phoneNumberBookNow: string,
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

    nameBookNow: {type: String, required: false },
    phoneNumberBookNow: {type: String, required: false},
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

const  BookNowFormModel = mongoose.model<BookNowFormDocument>("Book Now Form", BookNowFormSchema);

export default BookNowFormModel;