import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import path from "path";



const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    
    try {
        console.log("inside try catch validation")
        console.log(req.body);
        schema.parse({
            body: req.body,
        });
        
        next(); // Call next to move to the next middleware or route handler
    } catch (e: any) {
        console.log('Validation error: inside catch');
        console.log('Validation errors:', e.errors);
        return res.status(400).send(e.errors);
    }
};



export default validate;

