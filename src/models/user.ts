import { z } from "zod";

export const BasicUserSchema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "username must be 4 or more characters long" }),
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "password must be 4 or more characters long" }),
});

const HasIDSchema = z.object({ id: z.number().int().positive() });

export const UserSchemaWithId = BasicUserSchema.merge(HasIDSchema);

export type User = z.infer<typeof BasicUserSchema>;

export type UserWithId = z.infer<typeof UserSchemaWithId>;
