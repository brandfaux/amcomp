import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/app/site-header';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'AM Computers',
  description: 'Online services by AM Computers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          {/* You can add a footer here if you like */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
