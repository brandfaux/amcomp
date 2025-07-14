import { z } from 'zod';

const fileSchema = z.custom<File>(val => val instanceof File, "Please upload a file");

export const passportApplicationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  dateOfBirth: z.string().refine((val) => val && !isNaN(Date.parse(val)), { message: "A valid date of birth is required." }),
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

export const shopActLicenseSchema = z.object({
    shopName: z.string().min(3, { message: 'Shop name must be at least 3 characters.' }),
    shopAddress: z.string().min(10, { message: 'Shop address is required.' }),
    ownerName: z.string().min(3, { message: 'Owner name is required.' }),
    businessType: z.string().min(3, { message: 'Type of business is required.' }),
    documentUpload: fileSchema.refine(file => file.size < 5000000, "Max file size is 5MB.").optional(),
});

// Add other schemas as needed
export const businessRegistrationSchema = z.object({});
export const drivingLicenseSchema = z.object({});
export const itrFilingSchema = z.object({});
export const loanProjectReportSchema = z.object({});
export const udyamAadhaarSchema = z.object({});
export const panCardSchema = z.object({});
export const votingCardSchema = z.object({});
export const gstRegistrationSchema = z.object({});
export const hsrpNumberPlateSchema = z.object({});
export const examFormsSchema = z.object({});
export const aadhaarAddressUpdateSchema = z.object({});
export const annualMaintenanceContractSchema = z.object({});
export const networkSetupSchema = z.object({});
export const securityAuditsSchema = z.object({});
export const osSupportSchema = z.object({});
export const billingSoftwareSchema = z.object({});
export const invoiceSoftwareSchema = z.object({});
export const stampMakingSchema = z.object({});
export const logoDesignSchema = z.object({});
export const brandingSchema = z.object({});
export const photoEditingSchema = z.object({});
export const pvcCardPrintingSchema = z.object({});



export const serviceSchemaMap = {
    'passport-assistance': passportApplicationSchema,
    'food-licensing': foodLicensingSchema,
    'shop-act-license': shopActLicenseSchema,
    'itr-filing': itrFilingSchema,
    'loan-project-report': loanProjectReportSchema,
    'udyam-aadhaar': udyamAadhaarSchema,
    'pan-card': panCardSchema,
    'voting-card': votingCardSchema,
    'gst-registration': gstRegistrationSchema,
    'hsrp-number-plate': hsrpNumberPlateSchema,
    'exam-forms': examFormsSchema,
    'aadhaar-address-update': aadhaarAddressUpdateSchema,
    'business-registration': businessRegistrationSchema,
    'driving-license': drivingLicenseSchema,
    'annual-maintenance-contract': annualMaintenanceContractSchema,
    'network-setup': networkSetupSchema,
    'security-audits': securityAuditsSchema,
    'os-support': osSupportSchema,
    'billing-software': billingSoftwareSchema,
    'invoice-software': invoiceSoftwareSchema,
    'stamp-making': stampMakingSchema,
    'logo-design': logoDesignSchema,
    'branding': brandingSchema,
    'photo-editing': photoEditingSchema,
    'pvc-card-printing': pvcCardPrintingSchema,
}
