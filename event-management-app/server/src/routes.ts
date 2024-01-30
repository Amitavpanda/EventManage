import { Express, Response, Request } from "express";

import logger from "./utils/logger";
import path from "path";
import validateResource from "./middleware/validateResource";
import { contactFormSchema } from "./schema/contactForm.schema";
import { createContactFormHandler } from "./controller/contactForm.controller";
import { bookNowFormSchema } from "./schema/bookNowFormSchema";
import { createBookNowFormHandler } from "./controller/bookNowForm.controller";

const appLogger = logger.child({ filename: path.basename(__filename) });
function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  // app.get("/api/check", (req: Request, res: Response) => console.log("app is runing"));


  app.post(
    "/api/contactFormDetails",
    validateResource(contactFormSchema),
    createContactFormHandler
  );

  app.post('/api/bookNowFormDetails',
    validateResource(bookNowFormSchema),
    createBookNowFormHandler
  )

}




export default routes;