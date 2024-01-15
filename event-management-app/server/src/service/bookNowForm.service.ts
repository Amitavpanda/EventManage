import ContactFormModel, { ContactFormDocument, ContactFormInput } from "../models/ContactFormModel";
import { BookNowFormInput } from "../schema/bookNowFormSchema";
import logger from "../utils/logger";
import path from "path";
import BookNowFormModel from "../models/BookNowFormModel";

const appLogger = logger.child({ filename: path.basename(__filename) });

export async function createBookNowForm( input: BookNowFormInput){
    return BookNowFormModel.create(input);
}