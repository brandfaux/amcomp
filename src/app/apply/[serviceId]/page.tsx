import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import { ApplicationForm } from '@/components/app/application-form';

type ApplyPageProps = {
  params: {
    serviceId: string;
  };
};

export default function ApplyPage({ params }: ApplyPageProps) {
  const service = services.find((s) => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{service.title}</h1>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      </div>
      <ApplicationForm service={service} />
    </main>
  );
}
