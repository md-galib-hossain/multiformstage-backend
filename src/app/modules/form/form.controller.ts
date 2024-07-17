import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FormServices } from "./form.service";

const createForm = catchAsync(async(req,res)=>{
const result = await FormServices.create(req.body)
sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message: 'Form submitted successfully',
    data: result,
})

})
export const FormController = {createForm}