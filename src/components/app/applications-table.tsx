'use client';

import type { Application, ApplicationStatus } from '@/lib/services';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ApplicationsTableProps = {
  applications: Application[];
};

const statusVariantMap: Record<ApplicationStatus, "default" | "secondary" | "destructive" | "outline"> = {
  'Approved': 'default',
  'In Review': 'secondary',
  'Submitted': 'outline',
  'Rejected': 'destructive',
};

// Use a bg color that's a variant of the primary color
statusVariantMap['Approved'] = 'default'

export function ApplicationsTable({ applications }: ApplicationsTableProps) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Application ID</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date Submitted</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="font-medium">{app.id}</TableCell>
              <TableCell>{app.serviceName}</TableCell>
              <TableCell>{new Date(app.submittedDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge 
                    variant={statusVariantMap[app.status]}
                    className={cn(
                        app.status === 'Approved' && 'bg-green-500/80 text-white',
                        app.status === 'In Review' && 'bg-yellow-500/80 text-white',
                        app.status === 'Submitted' && 'border-gray-400 text-gray-600',
                        app.status === 'Rejected' && 'bg-red-500/80 text-white',
                    )}
                >
                    {app.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
