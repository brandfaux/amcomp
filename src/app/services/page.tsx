import Link from 'next/link';
import { services } from '@/lib/services';
import { ServiceCard } from '@/components/app/service-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function ServicesPage() {
  return (
    <main className="container mx-auto flex-1 p-4 md:p-8 space-y-12">
      <div>
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold tracking-tight mt-4">All Services</h1>
          <p className="text-muted-foreground">
            Explore all our available services.
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
