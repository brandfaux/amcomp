import type { StaticImageData } from 'next/image';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  content: string; // Markdown or HTML content
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'passport-documents-guide',
    title: 'A Comprehensive Guide to Documents Required for a New Indian Passport',
    date: '2024-07-28',
    excerpt: 'Applying for a new passport? Our detailed guide covers all the essential documents you need to ensure a smooth and successful application process.',
    imageUrl: 'https://images.unsplash.com/photo-1590674902824-c15d547c16c6?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'passport travel documents',
    author: {
      name: 'AM Computers Staff',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    content: `
      <p class="mb-4 text-lg">Applying for your first Indian passport is an exciting step towards global travel. To ensure your application is processed without any delays, it's crucial to have all the necessary documents in order. Here’s a comprehensive checklist of what you'll need.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">1. Proof of Present Address</h3>
      <p class="mb-4">You need to provide at least one of the following documents as proof of your current address. Ensure the name and address are correct and match your application details.</p>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li>Aadhaar Card</li>
        <li>Voter ID Card</li>
        <li>Electricity bill (latest)</li>
        <li>Telephone bill (landline or postpaid mobile, latest)</li>
        <li>Water bill (latest)</li>
        <li>Bank account passbook (from a Public Sector Bank, Private Sector Bank, or Regional Rural Bank)</li>
        <li>Rental agreement</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3">2. Proof of Date of Birth (DOB)</h3>
      <p class="mb-4">To verify your date of birth, you must submit one of the following documents:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li>Birth Certificate issued by the Municipal Authority or any other prescribed authority.</li>
        <li>School leaving certificate / Secondary School leaving certificate from a recognized board.</li>
        <li>PAN Card issued by the Income Tax Department.</li>
        <li>Aadhaar Card (if DOB is clearly mentioned).</li>
        <li>Driving License issued by the Transport Department of the concerned State Government.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3">3. Passport-size Photographs</h3>
      <p class="mb-4">You will need recent, colour passport-size photographs (4.5 cm x 3.5 cm) with a white background. The photo should have a frontal view of your face, with a neutral expression and both ears visible.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">4. Non-ECR (Emigration Check Not Required) Proof</h3>
      <p class="mb-4">For most applicants, providing proof of educational qualifications (like a 10th-grade pass certificate or higher) is sufficient to get a Non-ECR passport, which allows you to travel abroad without an emigration check.</p>

      <p class="mt-8 font-semibold">At AM Computers, we simplify this process for you. Visit us with your documents, and we'll handle the entire application, from form filling to appointment scheduling, ensuring a hassle-free experience.</p>
    `,
  },
  {
    slug: 'gst-registration-essentials',
    title: 'GST Registration Essentials for Small Businesses',
    date: '2024-07-25',
    excerpt: 'Starting a new business? Understand the basics of GST registration and why it’s crucial for your company’s growth and legal compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1599658880122-a633fb9b9560?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'business tax',
    author: {
      name: 'AM Computers Staff',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    content: `
      <p class="mb-4 text-lg">Goods and Services Tax (GST) is a cornerstone of the Indian tax system. For small businesses, understanding and complying with GST regulations is essential for smooth operations and legal standing. This article breaks down the key documents required for GST registration.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Documents for Proprietorship</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li>PAN card of the owner</li>
        <li>Aadhaar card of the owner</li>
        <li>Photograph of the owner (in JPEG format, maximum size 100 KB)</li>
        <li>Bank account details</li>
        <li>Address proof of the place of business</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3">Documents for Partnership Firm/LLP</h3>
       <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li>PAN card of the Partnership Firm/LLP</li>
        <li>Partnership Deed or LLP Agreement</li>
        <li>Photographs of all partners</li>
        <li>Address proof of partners</li>
        <li>Aadhaar card of any authorized signatory</li>
        <li>Bank account details</li>
        <li>Address proof of the principal place of business</li>
      </ul>

      <p class="mt-8 font-semibold">Navigating GST can be complex, but we're here to help. AM Computers offers complete GST registration and filing services to keep your business compliant.</p>
    `,
  },
  {
    slug: 'fssai-food-license-guide',
    title: 'Why Your Food Business Needs an FSSAI License',
    date: '2024-07-22',
    excerpt: 'Learn about the different types of FSSAI food licenses and the essential documents you need to operate your food business legally in India.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0fa3e?q=80&w=600&h=400&auto=format&fit=crop',
    imageHint: 'food preparation',
    author: {
      name: 'AM Computers Staff',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    content: `
      <p class="mb-4 text-lg">If you run a food business in India, obtaining a Food Safety and Standard Authority of India (FSSAI) license is not just a legal requirement but also a mark of quality and safety that builds customer trust.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Types of FSSAI Licenses</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li><strong>Basic Registration:</strong> For small businesses with an annual turnover of up to ₹12 lakh.</li>
        <li><strong>State License:</strong> For mid-sized businesses with an annual turnover between ₹12 lakh and ₹20 crore.</li>
        <li><strong>Central License:</strong> For large businesses, importers, exporters, and e-commerce operators with an annual turnover above ₹20 crore.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Common Documents Required</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4">
        <li>Photo ID and Address Proof of the business owner</li>
        <li>Proof of possession of business premises (e.g., rental agreement)</li>
        <li>List of food products manufactured or processed</li>
        <li>A detailed food safety management plan</li>
      </ul>

      <p class="mt-8 font-semibold">Let AM Computers handle your FSSAI registration. We'll help you identify the right license and manage all the paperwork, so you can focus on your delicious food.</p>
    `,
  },
];
