

import path from "path";
import BookNowFormModel from "../models/BookNowFormModel";
import { BookNowFormDocument } from "../models/BookNowFormModel";


export async function createBookNowForm( input: BookNowFormDocument){
    console.log("booknowform input", input);
    return BookNowFormModel.create(input);
}


