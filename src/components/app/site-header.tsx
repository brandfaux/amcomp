
'use client';

import React from 'react';
import Link from 'next/link';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Menu } from 'lucide-react';
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Desktop Menu */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-primary-foreground">AM</span>
            </div>
            <span className="font-bold sm:inline-block">AM Services Hub</span>
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
                <Button variant="ghost">
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
                    <Link href="/my-applications">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" asChild>
                <Link
                href="/my-applications"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/my-applications") || pathname?.startsWith("/apply") ? "text-foreground font-semibold" : "text-foreground/60"
                )}
              >
                My Applications
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
                    <Link href="/my-applications">My Applications</Link>
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
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-primary-foreground">AM</span>
                </div>
                <span className="font-bold sm:inline-block">AM Services Hub</span>
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="ghost" asChild>
            <Link href="https://wa.me/919028999007" target="_blank" className="hidden sm:flex">
                WhatsApp Us
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://placehold.co/40x40.png" alt="@user" data-ai-hint="user avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">User</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
