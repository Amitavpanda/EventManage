import { Request, Response } from "express";
import { BookNowFormInput } from "../schema/bookNowFormSchema";
export declare function createBookNowFormHandler(req: Request<{}, {}, BookNowFormInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
