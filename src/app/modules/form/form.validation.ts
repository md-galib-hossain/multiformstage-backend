import { z } from 'zod';



const EmergencyContactSchema = z.object({
  name: z.string().min(1),
  relationship: z.string().min(1),
  phone: z.string().min(1)
});

const PersonalInformationSchema = z.object({
  fullName: z.string().min(1),
  dateOfBirth: z.string(),
  nationality: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1)
});

const TravelPreferencesSchema = z.object({
  departureDate: z.string(),
  returnDate: z.string(),
  accommodationPreference: z.enum(['Space Hotel', 'Martian Base']),
  specialRequests: z.string().optional()
});

const HealthAndSafetySchema = z.object({
  healthDeclaration: z.enum(['Yes', 'No']),
  emergencyContactInformation: EmergencyContactSchema,
  medicalConditions: z.string().optional()
});

const create = z.object({
 body: z.object({
    personalInformation: PersonalInformationSchema,
    travelPreferences: TravelPreferencesSchema,
    healthAndSafety: HealthAndSafetySchema,
   
 })
});

export const FormValidation = {create};
