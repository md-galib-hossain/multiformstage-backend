import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TForm } from "./form.interface";
import { Form } from "./form.model";

const create = async (payload: TForm) => {
  const email = payload?.personalInformation?.email;
  
  const checkExist = await Form.findOne({
    "personalInformation.email": email
  });
  
  if (checkExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      "This email form already submitted"
    );
  }
  
  const result = await Form.create(payload);
  return result;
};

export const FormServices = { create };
