import * as z from "zod"

export const BookNowFormSchema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    phoneNumber:  z.string().min(10, "Phone number must be atleast 10 integer long"),
    budget : z.string(),
    category: z.string(),
    requirements: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    guestsNumber: z.string(),
  })


  export const contactFormSchema = z.object({
    name: z.string().min(3,"Name must be atleast 3 characters longs"),
    email: z.string().email(),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digit numbers"),
    message: z.string(),
  
  });