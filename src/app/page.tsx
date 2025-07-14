import Link from 'next/link';
import { services } from '@/lib/services';
import { ServiceCard } from '@/components/app/service-card';

export default function Home() {
  return (
    <main className="container mx-auto flex-1 p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground">
          Select a service to begin your application.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <Link href={`/apply/${service.id}`} key={service.id} className="group">
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </main>
  );
}
