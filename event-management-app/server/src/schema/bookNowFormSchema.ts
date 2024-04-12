import { object, number, string, TypeOf, date} from "zod";
import path from "path";



const payload = {
    body: object({
      nameBookNow: string({
        required_error: "Name is required",
      }),

      phoneNumberBookNow: string({
        required_error: "Phone number  Book Now is required",
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


  export type  BookNowFormInput = TypeOf<typeof bookNowFormSchema>;
  

  