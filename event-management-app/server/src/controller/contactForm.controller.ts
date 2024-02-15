import { Request, Response } from "express";
import { ContactFormInput } from "../schema/contactForm.schema";
import { createContactForm } from "../service/contactForm.service";
import logger from "../utils/logger";
import path from "path";
const appLogger = logger.child({ filename: path.basename(__filename) });

export async function 
createContactFormHandler(
    req: Request<{}, {}, ContactFormInput["body"]>,
    res: Response
  ) {
    const body = req.body;
  
    const product = await createContactForm({ ...body});
  
    return res.send(product);
  }

