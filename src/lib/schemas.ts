import { z } from 'zod';

const fileSchema = z.custom<File>(val => val instanceof File, "Please upload a file");

export const passportApplicationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date format." }),
  placeOfBirth: z.string().min(2, { message: 'Place of birth is required.' }),
  address: z.string().min(10, { message: 'Address must be at least 10 characters.' }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit phone number.'}),
  documentUpload: fileSchema.refine(file => file.size < 5000000, "Max file size is 5MB.").optional(),
});

export const foodLicensingSchema = z.object({
    businessName: z.string().min(3, { message: 'Business name must be at least 3 characters.' }),
    businessAddress: z.string().min(10, { message: 'Business address is required.' }),
    ownerName: z.string().min(3, { message: 'Owner name is required.' }),
    foodType: z.string().min(3, { message: 'Type of food is required.' }),
    documentUpload: fileSchema.refine(file => file.size < 5000000, "Max file size is 5MB.").optional(),
});

// Add other schemas as needed
export const businessRegistrationSchema = z.object({});
export const drivingLicenseSchema = z.object({});

export const serviceSchemaMap = {
    'passport-assistance': passportApplicationSchema,
    'food-licensing': foodLicensingSchema,
    'business-registration': businessRegistrationSchema,
    'driving-license': drivingLicenseSchema,
}
