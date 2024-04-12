import { Request, Response } from "express";
import { ContactFormInput } from "../schema/contactForm.schema";
export declare function createContactFormHandler(req: Request<{}, {}, ContactFormInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
