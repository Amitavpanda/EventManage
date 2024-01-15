import { Request, Response } from "express";
import { ContactFormInput } from "../schema/contactForm.schema";
import { createContactForm } from "../service/contactForm.service";
import logger from "../utils/logger";
import path from "path";
import { BookNowFormInput } from "../schema/bookNowFormSchema";
import { createBookNowForm } from "../service/bookNowForm.service";
const appLogger = logger.child({ filename: path.basename(__filename) });

export async function createBookNowFormHandler(
    req: Request<{}, {}, BookNowFormInput["body"]>,
    res: Response
  ) {
    const body = req.body;
  
    const product = await createBookNowForm({body});
  
    return res.send(product);
  }

