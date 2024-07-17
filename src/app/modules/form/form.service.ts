import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TForm } from "./form.interface";
import { Form } from "./form.model";
import emailSender from "../../utils/sendEmail";

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

const emailBody = `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 style="text-align: center; color: #4CAF50;">Form Submission Details</h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4CAF50;">Personal Information</h3>
      <p><strong>Full Name:</strong> ${payload.personalInformation.fullName}</p>
      <p><strong>Date of Birth:</strong> ${new Date(payload.personalInformation.dateOfBirth).toLocaleDateString()}</p>
      <p><strong>Nationality:</strong> ${payload.personalInformation.nationality}</p>
      <p><strong>Email:</strong> ${payload.personalInformation.email}</p>
      <p><strong>Phone:</strong> ${payload.personalInformation.phone}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #4CAF50;">Travel Preferences</h3>
      <p><strong>Departure Date:</strong> ${new Date(payload.travelPreferences.departureDate).toLocaleDateString()}</p>
      <p><strong>Return Date:</strong> ${new Date(payload.travelPreferences.returnDate).toLocaleDateString()}</p>
      <p><strong>Accommodation Preference:</strong> ${payload.travelPreferences.accommodationPreference}</p>
      <p><strong>Special Requests:</strong> ${payload.travelPreferences.specialRequests}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #4CAF50;">Health and Safety</h3>
      <p><strong>Health Declaration:</strong> ${payload.healthAndSafety.healthDeclaration}</p>
      <p><strong>Emergency Contact Name:</strong> ${payload.healthAndSafety.emergencyContactInformation.name}</p>
      <p><strong>Relationship:</strong> ${payload.healthAndSafety.emergencyContactInformation.relationship}</p>
      <p><strong>Phone:</strong> ${payload.healthAndSafety.emergencyContactInformation.phone}</p>
      <p><strong>Medical Conditions:</strong> ${payload.healthAndSafety.medicalConditions}</p>
    </div>
  </div>
`;

await emailSender(email, emailBody);


  return result;
};

export const FormServices = { create };
