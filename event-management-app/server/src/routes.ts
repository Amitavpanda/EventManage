import { Express, Response, Request} from "express";

import logger from "./utils/logger";
import path from "path";
import validateResource from "./middleware/validateResource";
import { contactFormSchema } from "./schema/contactForm.schema";
import { createContactFormHandler } from "./controller/contactForm.controller";

const appLogger = logger.child({ filename: path.basename(__filename) });
function routes(app: Express){
    app.get('/healthcheck', (req : Request, res: Response) => res.sendStatus(200));


    app.post(
        "/api/contactFormDetails",
        validateResource(contactFormSchema),
        createContactFormHandler
      );

}




export default routes;