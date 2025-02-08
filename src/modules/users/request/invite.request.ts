import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";

export const validate = (body: any) => {
  console.log(body);
  const validation = new Validatorjs(body, {
    username: "required",
    name: "required",
    email: "required|email",
    role: "required",
  });

  if (validation.fails()) {
    throw new ApiError(422, validation.errors.errors);
  }
};
