import { BookUser, ChefHat, Building, Car, LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
};

export const services: Service[] = [
  {
    id: 'passport-assistance',
    title: 'Passport Assistance',
    description: 'Guided assistance for new passport applications and renewals.',
    icon: BookUser,
    imageUrl: 'https://images.unsplash.com/photo-1559269555-54483a3f5a02?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'passport travel',
  },
  {
    id: 'food-licensing',
    title: 'Food Licensing',
    description: 'Apply for or renew your FSSAI food license for your business.',
    icon: ChefHat,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'food restaurant',
  },
  {
    id: 'business-registration',
    title: 'Business Registration',
    description: 'Register your new company, LLP, or partnership firm with ease.',
    icon: Building,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'business office',
  },
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Assistance with new learner\'s and permanent driving license applications.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1574643534299-76a11a7b830c?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'car driving',
  },
];

export type ApplicationStatus = 'Submitted' | 'In Review' | 'Approved' | 'Rejected';

export type Application = {
  id: string;
  serviceName: string;
  submittedDate: string;
  status: ApplicationStatus;
};

export const mockApplications: Application[] = [
  {
    id: 'APP-001',
    serviceName: 'Passport Assistance',
    submittedDate: '2024-07-15',
    status: 'Approved',
  },
  {
    id: 'APP-002',
    serviceName: 'Food Licensing',
    submittedDate: '2024-07-20',
    status: 'In Review',
  },
  {
    id: 'APP-003',
    serviceName: 'Business Registration',
    submittedDate: '2024-07-22',
    status: 'Submitted',
  },
    {
    id: 'APP-004',
    serviceName: 'Driving License',
    submittedDate: '2024-07-18',
    status: 'Rejected',
  },
];
