
  export type TEmergencyContact ={
    name: string;
    relationship: string;
    phone: string;
  }
  
  type PersonalInformation ={
    fullName: string;
    dateOfBirth: Date;
    nationality: string;
    email: string;
    phone: string;
  }
  
  type TTravelPreferences= {
    departureDate: Date;
    returnDate: Date;
    accommodationPreference: 'Space Hotel' | 'Martian Base';
    specialRequests?: string;
  }
  
  export type THealthAndSafety ={
    healthDeclaration: "Yes" | "No";
    emergencyContactInformation: TEmergencyContact;
    medicalConditions?: string;
  }
  
 export type TForm= {
    personalInformation: PersonalInformation;
    travelPreferences: TTravelPreferences;
    healthAndSafety: THealthAndSafety;
  
  }
  
  