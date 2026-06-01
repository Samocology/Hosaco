import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";

export const Route = createFileRoute("/portal/parent/attendance")({
  head: () => ({ meta: [{ title: "Attendance — Parent Portal" }] }),
  component: () => {
    const days = Array.from({ length: 30 }, (_, i) => ({ d: i + 1, s: i % 11 === 0 ? "absent" : i % 7 === 0 ? "late" : "present" }));
    const colour = (s: string) => s === "present" ? "bg-success/80" : s === "late" ? "bg-warning" : "bg-destructive/80";
    return (
      <PortalShell role="parent" title="Attendance" subtitle="Daily record for the current term.">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label="Present" value="96%" accent="text-success" />
          <StatCard label="Late arrivals" value="3" />
          <StatCard label="Absences" value="2" accent="text-warning" />
        </div>
        <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Last 30 school days</h3>
          <div className="grid grid-cols-10 gap-2">
            {days.map((d) => (
              <div key={d.d} title={`Day ${d.d}: ${d.s}`} className={`aspect-square rounded-md ${colour(d.s)}`} />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-success/80" /> Present</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-warning" /> Late</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-destructive/80" /> Absent</span>
          </div>
        </div>
      </PortalShell>
    );
  },
});
