import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logger from "../utils/logger";
import path from "path";

const appLogger = logger.child({ filename: path.basename(__filename) });

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {
        console.log( "request body " ,req.body);
        schema.parse({
            body: req.body,
        });
        next(); // Call next to move to the next middleware or route handler
    } catch (e: any) {
        appLogger.error('Validation error:', e.errors);
        console.log(e.errors);
        return res.status(400).send(e.errors);
    }
};

export default validate;
