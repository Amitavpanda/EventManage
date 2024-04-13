import ContactFormModel, { ContactFormDocument, ContactFormInput } from "../models/ContactFormModel";
import path from "path";


export async function createContactForm( input: ContactFormInput){
    console.log("contact input ", input);
    return ContactFormModel.create(input);
}


