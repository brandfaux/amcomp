import { BookUser, ChefHat, Building, Car, LucideIcon, FileText, ShieldCheck, Server, Laptop, Stamp, Palette, Edit3, CreditCard, ShoppingBag, FolderArchive, ScanLine, Printer, UserCheck, Briefcase, FileSignature, FileSpreadsheet, Building2, FileBadge } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
  category: string;
};

export const services: Service[] = [
  // Government Services
  {
    id: 'passport-assistance',
    title: 'Passport Assistance',
    description: 'Guided assistance for new passport applications and renewals.',
    icon: BookUser,
    imageUrl: 'https://images.unsplash.com/photo-1559269555-54483a3f5a02?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'passport travel',
    category: 'Government',
  },
  {
    id: 'food-licensing',
    title: 'Food Licensing',
    description: 'Apply for or renew your FSSAI food license for your business.',
    icon: ChefHat,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'food restaurant',
    category: 'Government',
  },
  {
    id: 'shop-act-license',
    title: 'Shop Act License',
    description: 'Obtain your Shop & Establishment Act license for legal compliance.',
    icon: ShoppingBag,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'store front',
    category: 'Government',
  },
  {
    id: 'itr-filing',
    title: 'ITR Filing',
    description: 'Professional assistance for timely and accurate income tax return filing.',
    icon: FileSpreadsheet,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tax document',
    category: 'Government',
  },
  {
    id: 'loan-project-report',
    title: 'Loan Project Report',
    description: 'Detailed project reports for bank loans and financial applications.',
    icon: FileSignature,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'financial report',
    category: 'Government',
  },
  {
    id: 'udyam-aadhaar',
    title: 'Udyam Aadhaar',
    description: 'Register your MSME under Udyam Aadhaar for government benefits.',
    icon: Building2,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'small business',
    category: 'Government',
  },
  {
    id: 'pan-card',
    title: 'PAN Card',
    description: 'Apply for a new PAN card or request corrections.',
    icon: FileBadge,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'identity card',
    category: 'Government',
  },
  {
    id: 'voting-card',
    title: 'Voting Card',
    description: 'Register for a new voter ID card or update your details.',
    icon: UserCheck,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'election vote',
    category: 'Government',
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    description: 'Complete assistance for GST registration, filing, and compliance.',
    icon: FileText,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tax document',
    category: 'Government',
  },
  {
    id: 'hsrp-number-plate',
    title: 'HSRP Number Plate',
    description: 'Apply for High-Security Registration Plates for your vehicle.',
    icon: Car,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'license plate',
    category: 'Government',
  },
  {
    id: 'exam-forms',
    title: 'Exam Forms',
    description: 'Assistance with filling and submitting various online examination forms.',
    icon: FileText,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online exam',
    category: 'Government',
  },
  {
    id: 'aadhaar-address-update',
    title: 'Aadhaar Address Update',
    description: 'Update your address and other details on your Aadhaar card.',
    icon: UserCheck,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'identity card',
    category: 'Government',
  },

  // Business
  {
    id: 'business-registration',
    title: 'Business Registration',
    description: 'Register your new company, LLP, or partnership firm with ease.',
    icon: Building,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'business office',
    category: 'Business',
  },

  // IT Services
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Assistance with new learner\'s and permanent driving license applications.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1574643534299-76a11a7b830c?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'car driving',
    category: 'Government',
  },
  {
    id: 'annual-maintenance-contract',
    title: 'Annual Maintenance Contract',
    description: 'Comprehensive AMC for your IT infrastructure to ensure smooth operation.',
    icon: FolderArchive,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'computer maintenance',
    category: 'IT Services',
  },
  {
    id: 'network-setup',
    title: 'Network Setup',
    description: 'Professional network design, installation, and configuration.',
    icon: Server,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'server room',
    category: 'IT Services',
  },
  {
    id: 'security-audits',
    title: 'Security Audits',
    description: 'Thorough security audits to identify and mitigate vulnerabilities.',
    icon: ShieldCheck,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cyber security',
    category: 'IT Services',
  },
  {
    id: 'os-support',
    title: 'OS Support',
    description: 'Expert support for various operating systems, including troubleshooting.',
    icon: Laptop,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'laptop code',
    category: 'IT Services',
  },

  // Software Services
  {
    id: 'billing-software',
    title: 'Billing Software',
    description: 'Customized billing solutions to streamline your invoicing process.',
    icon: FileSpreadsheet,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'accounting software',
    category: 'Software Services',
  },
  {
    id: 'invoice-software',
    title: 'Invoice Software',
    description: 'User-friendly software for creating and managing professional invoices.',
    icon: FileText,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'invoice document',
    category: 'Software Services',
  },

  // Design Services
  {
    id: 'stamp-making',
    title: 'Stamp Making',
    description: 'Custom rubber stamps and seals for your business needs.',
    icon: Stamp,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'rubber stamp',
    category: 'Design Services',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Creative and unique logo designs to represent your brand.',
    icon: Palette,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'design process',
    category: 'Design Services',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive branding packages to build a strong identity.',
    icon: Briefcase,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'brand moodboard',
    category: 'Design Services',
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    description: 'Professional photo retouching, color correction, and manipulation.',
    icon: Edit3,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'photo editor',
    category: 'Design Services',
  },
  {
    id: 'pvc-card-printing',
    title: 'PVC Card Printing',
    description: 'High-quality printing for ID cards, membership cards, and more.',
    icon: CreditCard,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'card printing',
    category: 'Design Services',
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
