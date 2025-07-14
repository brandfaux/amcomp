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
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'passport travel',
  },
  {
    id: 'food-licensing',
    title: 'Food Licensing',
    description: 'Apply for or renew your FSSAI food license for your business.',
    icon: ChefHat,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food restaurant',
  },
  {
    id: 'business-registration',
    title: 'Business Registration',
    description: 'Register your new company, LLP, or partnership firm with ease.',
    icon: Building,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'business office',
  },
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Assistance with new learner\'s and permanent driving license applications.',
    icon: Car,
    imageUrl: 'https://placehold.co/600x400.png',
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
