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
    imageUrl: 'https://images.unsplash.com/photo-1706880471208-88328ff11505?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'passport travel',
    category: 'Government',
  },
  {
    id: 'food-licensing',
    title: 'Food Licensing',
    description: 'Apply for or renew your FSSAI food license for your business.',
    icon: ChefHat,
    imageUrl: 'https://images.unsplash.com/photo-1556745750-68295fefafc5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'food restaurant',
    category: 'Government',
  },
  {
    id: 'shop-act-license',
    title: 'Shop Act License',
    description: 'Obtain your Shop & Establishment Act license for legal compliance.',
    icon: ShoppingBag,
    imageUrl: 'https://images.unsplash.com/photo-1552353289-97f99c442b3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D',
    imageHint: 'store front',
    category: 'Government',
  },
  {
    id: 'itr-filing',
    title: 'ITR Filing',
    description: 'Professional assistance for timely and accurate income tax return filing.',
    icon: FileSpreadsheet,
    imageUrl: 'https://images.unsplash.com/photo-1642655358689-56b944d6f5f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1525504393201-8f144ab81077?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'small business',
    category: 'Government',
  },
  {
    id: 'pan-card',
    title: 'PAN Card',
    description: 'Apply for a new PAN card or request corrections.',
    icon: FileBadge,
    imageUrl: 'https://images.unsplash.com/photo-1619418602850-35ad20aa1700?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'identity card',
    category: 'Government',
  },
  {
    id: 'voting-card',
    title: 'Voting Card',
    description: 'Register for a new voter ID card or update your details.',
    icon: UserCheck,
    imageUrl: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'election vote',
    category: 'Government',
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    description: 'Complete assistance for GST registration, filing, and compliance.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'tax document',
    category: 'Government',
  },
  {
    id: 'hsrp-number-plate',
    title: 'HSRP Number Plate',
    description: 'Apply for High-Security Registration Plates for your vehicle.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1718784492504-b57e8a88c725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlaGljYWwlMjBudW1iZXIlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1566232137428-27dd00f5c6bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'server room',
    category: 'IT Services',
  },
  {
    id: 'security-audits',
    title: 'Security Audits',
    description: 'Thorough security audits to identify and mitigate vulnerabilities.',
    icon: ShieldCheck,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1579279263243-a217b132ce3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'accounting software',
    category: 'Software Services',
  },
  {
    id: 'invoice-software',
    title: 'Invoice Software',
    description: 'User-friendly software for creating and managing professional invoices.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1654263736203-a289f57c0d82?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'invoice document',
    category: 'Software Services',
  },

  // Design Services
  {
    id: 'stamp-making',
    title: 'Stamp Making',
    description: 'Custom rubber stamps and seals for your business needs.',
    icon: Stamp,
    imageUrl: 'https://images.unsplash.com/photo-1593448807258-e50956785800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YW1wc3xlbnwwfHwwfHx8MA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'photo editor',
    category: 'Design Services',
  },
  {
    id: 'pvc-card-printing',
    title: 'PVC Card Printing',
    description: 'High-quality printing for ID cards, membership cards, and more.',
    icon: CreditCard,
    imageUrl: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
