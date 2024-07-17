import { Schema, model } from "mongoose";
import {
  TForm,
  TEmergencyContact,
} from "./form.interface";

const phoneValidator = (value : string) => {
  if (value.length === 11) {
    const regex = /^01[3-9]\d{8}$/;
    return regex.test(value);
  } else if (value.length === 14) {
    const regex = /^\+8801[3-9]\d{8}$/;
    return regex.test(value);
  }
  return false;
};

const emergencyContactSchema = new Schema<TEmergencyContact>(
  {
    name: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: phoneValidator,
        message: 'Please enter a valid phone number'
      }
    },
  },
  { _id: false }
);

const formSchema = new Schema<TForm>(
  {


    personalInformation: {


      fullName: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
      },
      phone: {
        type: String,
        required: true,
        validate: {
          validator: phoneValidator,
          message: 'Please enter a valid phone number'
        }
      },
    },
    travelPreferences: {
      departureDate: {
        type: Date,
        required: true,
      },
      returnDate: {
        type: Date,
        required: true,
      },
      accommodationPreference: {
        type: String,
        required: true,
        enum: ["Space Hotel", "Martian Base"],
      },
      specialRequests: String,
    },
    healthAndSafety: {
      healthDeclaration: {
        type: String,
        required: true,
        enum: ["Yes", "No"],
      },
      emergencyContactInformation: {
        type: emergencyContactSchema,
        required: true,
      },
      medicalConditions: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Form = model<TForm>("Form", formSchema);
