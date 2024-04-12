import { object, number, string, TypeOf } from "zod";
import path from "path";



const payload = {
    body: object({
      name: string({
        required_error: "Name is required",
      }),
      email: string(),
      phoneNumber: string({
        required_error: "Phone number is required",
      }).min(10, "Phone number should be at least 10 digit long").max(14, "Phone Number should not be greater than 14 digits"),
      message: string({
        required_error: "Message is required, We would love to hear about your message",
      }),
    }),
  };


  export const contactFormSchema = object({
    ...payload,
  });


  export type ContactFormInput = TypeOf<typeof contactFormSchema>;
  