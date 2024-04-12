import ContactFormModel, { ContactFormDocument, ContactFormInput } from "../models/ContactFormModel";
import { BookNowFormInput } from "../schema/bookNowFormSchema";
import path from "path";
import BookNowFormModel from "../models/BookNowFormModel";


export async function createBookNowForm( input: BookNowFormInput){
    return BookNowFormModel.create(input);
}


