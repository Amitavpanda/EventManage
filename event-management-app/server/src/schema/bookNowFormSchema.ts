import { object, number, string, TypeOf, date} from "zod";
import logger from "../utils/logger";
import path from "path";
const appLogger = logger.child({ filename: path.basename(__filename) });



const payload = {
    body: object({
      name: string({
        required_error: "Name is required",
      }),

      phoneNumber: string({
        required_error: "Phone number is required",
      }).min(10, "Phone number should be at least 10 digit long"),

      budget : string(),
      category: string({
        required_error: "Category is required",
      }),
      requirements: string(),
      startDateTime: string(),
      endDateTime: string(),
      guestsNumber: string()


    }),
  };


  export const bookNowFormSchema = object({
    ...payload,
  });


  export type   BookNowFormInput = TypeOf<typeof bookNowFormSchema>;
  