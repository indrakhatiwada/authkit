"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // validate fields

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPw = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already used" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPw,
      name,
    },
  });

  // TODO: send email

  return { success: "User Created" };
};
