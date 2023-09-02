import { z, ZodError } from "zod";

const mySchema = z.number();

try {
  const result = mySchema.parse(1.1);
  console.log(result);
} catch (error) {
  if (error instanceof ZodError) {
    console.log(error);
  }
}
