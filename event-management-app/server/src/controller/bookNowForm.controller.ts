import { Request, Response } from "express";
import { ContactFormInput } from "../schema/contactForm.schema";
import { createContactForm } from "../service/contactForm.service";
import path from "path";
import { BookNowFormInput } from "../schema/bookNowFormSchema";
import { createBookNowForm } from "../service/bookNowForm.service";

export async function createBookNowFormHandler(
    req: Request<{}, {}, BookNowFormInput["body"]>,
    res: Response
  ) {
    
    const body = req.body;  
    console.log("body inside controller", body);
    
    const product = await createBookNowForm({ ...body});
    console.log("product inside controller", product);
  
    return res.send(product);
  }

