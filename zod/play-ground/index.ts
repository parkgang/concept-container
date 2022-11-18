import { z } from "zod";

function 공백() {
  console.log(
    "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
  );
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
}

const mySchema = z.string();

try {
  mySchema.parse("tuna"); // => "tuna"
  mySchema.parse(12); // => throws ZodError
} catch (error) {
  console.log("parse error", error);
  공백();
}

const tunaResult = mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
console.log("tunaResult", tunaResult);
공백();

const _12Result = mySchema.safeParse(12); // => { success: false; error: ZodError }
console.log("12 Result", _12Result);
공백();
