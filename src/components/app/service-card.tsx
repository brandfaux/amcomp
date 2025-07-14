import type { Service } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="flex h-full flex-col transform-gpu transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl overflow-hidden">
      <div className="relative h-40 w-full">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          data-ai-hint={service.imageHint}
        />
      </div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-4">
        <CardTitle className="text-lg font-medium">{service.title}</CardTitle>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
          <Icon className="h-6 w-6" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Apply Now</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
