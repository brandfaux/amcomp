import Link from 'next/link';
import { ApplicationsTable } from '@/components/app/applications-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceCard } from '@/components/app/service-card';
import { mockApplications, services } from '@/lib/services';

export default function MyApplicationsPage() {
  return (
    <main className="container mx-auto flex-1 p-4 md:p-8 space-y-12">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
          <p className="text-muted-foreground">
            Track the status of your service applications.
          </p>
        </div>
        <ApplicationsTable applications={mockApplications} />
      </div>

      <div>
        <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Available Services</h2>
            <p className="text-muted-foreground">
              Need something else? Explore all our available services.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link href={`/apply/${service.id}`} key={service.id} className="group">
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
