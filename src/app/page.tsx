import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, User } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '1000+', label: 'Satisfied Clients' },
    { value: '24/7', label: 'Customer Support' },
    { value: '50+', label: 'Services Offered' },
  ];

  const testimonials = [
    {
      name: 'Client Name',
      role: 'Business Owner',
      quote:
        'AM Computers provided excellent service for our GST registration. They made the entire process smooth and hassle-free. Highly recommended!',
    },
    {
      name: 'Another Client',
      role: 'Individual',
      quote:
        'The passport assistance was top-notch. The team is knowledgeable and guided me through every step. I got my passport without any issues.',
    },
    {
      name: 'Happy Customer',
      role: 'Restaurateur',
      quote:
        "Renewing my food license was a breeze with their help. Professional, efficient, and friendly service. I'll definitely be back for other needs.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-x-0 top-0 bottom-0 opacity-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] bg-repeat opacity-20" />
        </div>
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-2">
              Trusted Since 2013
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional Services For All Your Needs
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                Your one-stop solution for government documentation, IT services, and design solutions in Jamkhed, Ahmednagar.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-secondary/50">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-12 md:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full border border-border text-muted-foreground">
                Our Offerings
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Services</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Comprehensive solutions tailored for your documentation and technology needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <Card key={service.id} className="flex flex-col group hover:border-primary transition-colors">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={service.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground mb-2 w-fit">
                      {service.category}
                    </span>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" asChild className="w-full mt-4">
                      <Link href={`/apply/${service.id}`}>
                        Apply Now <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="ghost" asChild>
                <Link href="/my-applications" className="flex items-center">
                  View All Services <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full border border-border text-muted-foreground">
                Our Story
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About AM Services Hub</h2>
              <p className="text-muted-foreground">
                Established in 2013, AM Computers has been serving the Jamkhed community with reliable and professional
                services for all documentation and technology needs. Our experienced team ensures smooth processing
                of all your requirements with utmost care and professionalism.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>10+ years of trusted service</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>1000+ satisfied clients</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Personalized service approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Competitive pricing</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-video w-full max-w-lg rounded-lg overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&h=400&auto=format&fit=crop" alt="Office" layout="fill" objectFit="cover" data-ai-hint="office team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full border border-border text-muted-foreground">
                Client Feedback
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Hear from businesses and individuals who have used our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current h-4 w-4" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-12 md:py-24 bg-gradient-to-b from-background to-primary/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] bg-repeat opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Contact us today for professional assistance with all your documentation and technology needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="https://wa.me/919028999007" target="_blank" className="flex items-center">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
