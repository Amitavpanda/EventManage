import ContactFormModel, { ContactFormDocument, ContactFormInput } from "../models/ContactFormModel";
import logger from "../utils/logger";
import path from "path";

const appLogger = logger.child({ filename: path.basename(__filename) });

export async function createContactForm( input: ContactFormInput){
    return ContactFormModel.create(input);
}


