"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormState = {
  message: string | null;
};

export async function updateUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email");

  const validated = schema.safeParse({ email });

  if (!validated.success) {
    const errorMessage =
      validated.error.flatten().fieldErrors.email?.[0] || "Invalid input";
    return { message: errorMessage };
  }

  console.log("Updating user with email:", validated.data.email);

  return { message: "User updated successfully!" };
}
