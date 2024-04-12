import * as z from "zod"

export const BookNowFormSchema = z.object({
  nameBookNow: z.string().min(3, "Name must be atleast 3 characters longs").regex(/^[a-zA-Z\s]+$/, "Name should contain alphabet characters only"),
  phoneNumberBookNow: z.string().min(10, "Phone number must be at least 10 digit numbers").regex(/^\d+$/, "Phone number should be in digits").max(14, "Phone Number should not be greater than 14 digits"),
  budget: z.string(),
  category: z.string(),
  requirements: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  guestsNumber: z.string(),
})


export const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters longs").regex(/^[a-zA-Z\s]+$/, "Name should contain alphabet characters only"),
  email: z.string().email(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digit numbers").regex(/^\d+$/, "Phone number should be in digits").max(14, "Phone Number should not be greater than 14 digits"),
  message: z.string(),

});