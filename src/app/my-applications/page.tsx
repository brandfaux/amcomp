import { ApplicationsTable } from '@/components/app/applications-table';
import { mockApplications } from '@/lib/services';

export default function MyApplicationsPage() {
  return (
    <main className="container mx-auto flex-1 p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
        <p className="text-muted-foreground">
          Track the status of your service applications.
        </p>
      </div>
      <ApplicationsTable applications={mockApplications} />
    </main>
  );
}
