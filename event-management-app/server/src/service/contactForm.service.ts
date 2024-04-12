import ContactFormModel, { ContactFormDocument, ContactFormInput } from "../models/ContactFormModel";
import path from "path";


export async function createContactForm( input: ContactFormInput){
    return ContactFormModel.create(input);
}


