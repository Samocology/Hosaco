import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";

const attendance = [
  { c: "JSS 1", present: 172, late: 5, absent: 3 },
  { c: "JSS 2", present: 168, late: 4, absent: 3 },
  { c: "JSS 3", present: 179, late: 2, absent: 4 },
  { c: "SSS 1 Science", present: 105, late: 3, absent: 2 },
  { c: "SSS 2 Science", present: 101, late: 2, absent: 2 },
  { c: "SSS 3 Science", present: 103, late: 1, absent: 1 },
];

export const Route = createFileRoute("/portal/staff/attendance")({
  head: () => ({ meta: [{ title: "Attendance — Staff Dashboard" }] }),
  component: () => (
    <PortalShell role="staff" title="Attendance" subtitle="Mark, review and track daily attendance across all classes." action={<Button className="bg-gradient-primary text-primary-foreground"><CalendarCheck className="mr-2 h-4 w-4" /> Mark today</Button>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="School average" value="94%" accent="text-success" />
        <StatCard label="Present today" value="1,128" />
        <StatCard label="Late arrivals" value="17" accent="text-warning" />
        <StatCard label="Absent" value="15" />
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 font-semibold">Class attendance register</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="pb-2 text-left font-medium">Class</th><th className="text-center">Present</th><th className="text-center">Late</th><th className="text-center">Absent</th><th className="text-right">Rate</th></tr>
            </thead>
            <tbody>
              {attendance.map((row) => {
                const total = row.present + row.late + row.absent;
                return (
                  <tr key={row.c} className="border-t">
                    <td className="py-3 font-medium">{row.c}</td>
                    <td className="text-center text-success">{row.present}</td>
                    <td className="text-center text-warning">{row.late}</td>
                    <td className="text-center">{row.absent}</td>
                    <td className="text-right font-semibold">{Math.round((row.present / total) * 100)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
