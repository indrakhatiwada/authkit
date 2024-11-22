"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // validate fields

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  return { success: "Email Sent!" };
};
