
  

  import { object, number, string, TypeOf } from "zod";
  import path from "path";
  
  
  
  const payload = {
      body: object({
        nameBookNow: string({
          required_error: "NameBookNow is required",
        }),
        phoneNumberBookNow: string({
          required_error: "Phone number Book Now is required",
        }).min(10, "Phone number should be at least 10 digit long").max(14, "Phone Number should not be greater than 14 digits"),
        budget: string(),
        category : string(),
        requirements : string(),
        startDateTime : string(),
        endDateTime : string(),
        guestsNumber : string()

      }),
    };
  
  
    export const bookNowFormSchema = object({
      ...payload,
    });
  
  
    export type BookNowFormInput = TypeOf<typeof bookNowFormSchema>;
    