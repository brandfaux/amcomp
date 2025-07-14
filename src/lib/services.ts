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
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'store front',
    category: 'Government',
  },
  {
    id: 'itr-filing',
    title: 'ITR Filing',
    description: 'Professional assistance for timely and accurate income tax return filing.',
    icon: FileSpreadsheet,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04421cd6c3?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'tax document',
    category: 'Government',
  },
  {
    id: 'loan-project-report',
    title: 'Loan Project Report',
    description: 'Detailed project reports for bank loans and financial applications.',
    icon: FileSignature,
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'financial report',
    category: 'Government',
  },
  {
    id: 'udyam-aadhaar',
    title: 'Udyam Aadhaar',
    description: 'Register your MSME under Udyam Aadhaar for government benefits.',
    icon: Building2,
    imageUrl: 'https://images.unsplash.com/photo-1618495060492-28c043e06a35?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'small business',
    category: 'Government',
  },
  {
    id: 'pan-card',
    title: 'PAN Card',
    description: 'Apply for a new PAN card or request corrections.',
    icon: FileBadge,
    imageUrl: 'https://images.unsplash.com/photo-1605281317457-19e4ac246d84?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'identity card',
    category: 'Government',
  },
  {
    id: 'voting-card',
    title: 'Voting Card',
    description: 'Register for a new voter ID card or update your details.',
    icon: UserCheck,
    imageUrl: 'https://images.unsplash.com/photo-1548212196-0681b95b8a69?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'election vote',
    category: 'Government',
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    description: 'Complete assistance for GST registration, filing, and compliance.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-86c6df22c86b?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'tax document',
    category: 'Government',
  },
  {
    id: 'hsrp-number-plate',
    title: 'HSRP Number Plate',
    description: 'Apply for High-Security Registration Plates for your vehicle.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1517593988692-f04b16253b40?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'license plate',
    category: 'Government',
  },
  {
    id: 'exam-forms',
    title: 'Exam Forms',
    description: 'Assistance with filling and submitting various online examination forms.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'online exam',
    category: 'Government',
  },
  {
    id: 'aadhaar-address-update',
    title: 'Aadhaar Address Update',
    description: 'Update your address and other details on your Aadhaar card.',
    icon: UserCheck,
    imageUrl: 'https://images.unsplash.com/photo-1605281317457-19e4ac246d84?q=80&w=600&h=400&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'computer maintenance',
    category: 'IT Services',
  },
  {
    id: 'network-setup',
    title: 'Network Setup',
    description: 'Professional network design, installation, and configuration.',
    icon: Server,
    imageUrl: 'https://images.unsplash.com/photo-1593404394075-87744273b3f2?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'server room',
    category: 'IT Services',
  },
  {
    id: 'security-audits',
    title: 'Security Audits',
    description: 'Thorough security audits to identify and mitigate vulnerabilities.',
    icon: ShieldCheck,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4138d0e2ca83?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'cyber security',
    category: 'IT Services',
  },
  {
    id: 'os-support',
    title: 'OS Support',
    description: 'Expert support for various operating systems, including troubleshooting.',
    icon: Laptop,
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'laptop code',
    category: 'IT Services',
  },

  // Software Services
  {
    id: 'billing-software',
    title: 'Billing Software',
    description: 'Customized billing solutions to streamline your invoicing process.',
    icon: FileSpreadsheet,
    imageUrl: 'https://images.unsplash.com/photo-1599658880122-a633fb9b9560?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'accounting software',
    category: 'Software Services',
  },
  {
    id: 'invoice-software',
    title: 'Invoice Software',
    description: 'User-friendly software for creating and managing professional invoices.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1563235021-b9c14c5f5999?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'invoice document',
    category: 'Software Services',
  },

  // Design Services
  {
    id: 'stamp-making',
    title: 'Stamp Making',
    description: 'Custom rubber stamps and seals for your business needs.',
    icon: Stamp,
    imageUrl: 'https://images.unsplash.com/photo-1619472301991-3606a2823757?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'rubber stamp',
    category: 'Design Services',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Creative and unique logo designs to represent your brand.',
    icon: Palette,
    imageUrl: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'design process',
    category: 'Design Services',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive branding packages to build a strong identity.',
    icon: Briefcase,
    imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'brand moodboard',
    category: 'Design Services',
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    description: 'Professional photo retouching, color correction, and manipulation.',
    icon: Edit3,
    imageUrl: 'https://images.unsplash.com/photo-1572731144243-55109257c8a3?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'photo editor',
    category: 'Design Services',
  },
  {
    id: 'pvc-card-printing',
    title: 'PVC Card Printing',
    description: 'High-quality printing for ID cards, membership cards, and more.',
    icon: CreditCard,
    imageUrl: 'https://images.unsplash.com/photo-1615598813354-18451a37c0db?q=80&w=600&h=400&auto=format&fit=crop',
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
