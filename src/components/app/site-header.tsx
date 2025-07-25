
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';
import { useMemo } from 'react';

export function SiteHeader() {
  const pathname = usePathname();

  const serviceGroups = useMemo(() => {
    return services.reduce((acc, service) => {
      const category = service.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as Record<string, typeof services>);
  }, []);

  const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services', isDropdown: true },
      { href: '/blog', label: 'Blog' },
      { href: '/#about', label: 'About' },
      { href: '/#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Desktop Menu */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.png" alt="AM Computers Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold sm:inline-block">AM Computers</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
             <Button variant="ghost" asChild>
                <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground font-semibold" : "text-foreground/60"
                )}
                >
                Home
                </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/apply") || pathname?.startsWith("/services") ? "text-foreground font-semibold" : "text-foreground/60"
                )}>
                  Services
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="start">
                {Object.entries(serviceGroups).map(([category, services]) => (
                    <React.Fragment key={category}>
                        <DropdownMenuLabel>{category}</DropdownMenuLabel>
                        {services.map((service) => (
                            <DropdownMenuItem key={service.id} asChild>
                                <Link href={`/apply/${service.id}`}>{service.title}</Link>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                    </React.Fragment>
                ))}
                <DropdownMenuItem asChild>
                    <Link href="/services">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" asChild>
                <Link
                href="/blog"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/blog" ? "text-foreground font-semibold" : "text-foreground/60"
                )}
                >
                Blog
                </Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link
                    href="/#about"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                >
                    About
                </Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link
                    href="/#contact"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                >
                    Contact
                </Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuItem asChild>
                    <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/services">Services</Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                    <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {Object.entries(serviceGroups).flatMap(([category, services]) => [
                    <DropdownMenuLabel key={category}>{category}</DropdownMenuLabel>,
                    ...services.map(service => (
                    <DropdownMenuItem key={service.id} asChild>
                        <Link href={`/apply/${service.id}`}>{service.title}</Link>
                    </DropdownMenuItem>
                    ))
                ])}
                 <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/#about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/#contact">Contact</Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
             <Link href="/" className="ml-4 flex items-center space-x-2">
                <Image src="/logo.png" alt="AM Computers Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold sm:inline-block">AM Computers</span>
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="ghost" asChild>
            <Link href="https://wa.me/919028999007" target="_blank" className="hidden sm:flex">
                WhatsApp Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
