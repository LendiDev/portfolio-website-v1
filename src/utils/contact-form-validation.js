import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name should contain at least 2 characters long" })
    .max(45, {
      message: "Name should be contain less than 45 characters long",
    })
    .default("Enter Name"),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid E-mail address" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters long" }),
});

export default contactFormSchema;
