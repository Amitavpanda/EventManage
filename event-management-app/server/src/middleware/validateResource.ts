import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logger from "../utils/logger";
import path from "path";

const appLogger = logger.child({ filename: path.basename(__filename) });

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    
    try {
        appLogger.info("inside the try catch");
        
        schema.parse({
            body: req.body,
        });
        
        next(); // Call next to move to the next middleware or route handler
    } catch (e: any) {
        appLogger.info('Validation error: inside catch');
        appLogger.error('Validation errors:', e.errors);
        return res.status(400).send(e.errors);
    }
};

export default validate;
