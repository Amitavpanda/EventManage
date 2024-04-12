import { Request, Response } from "express";
import { ContactFormInput } from "../schema/contactForm.schema";
import { createContactForm } from "../service/contactForm.service";
import path from "path";

export async function 
createContactFormHandler(
    req: Request<{}, {}, ContactFormInput["body"]>,
    res: Response
  ) {
    const body = req.body;
    console.log("body inside controller", body);
  
    const product = await createContactForm({ ...body});

    console.log("product inside contact controller", product);
  
    return res.send(product);
  }

