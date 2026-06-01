import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";

export const Route = createFileRoute("/portal/admin/logs")({
  head: () => ({ meta: [{ title: "Logs — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="System logs" subtitle="Readable activity trail for school operations.">
      <div className="rounded-2xl border bg-card shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="p-4 text-left font-medium">Time</th><th className="text-left">Area</th><th className="text-left">Event</th><th className="text-right p-4">Status</th></tr>
            </thead>
            <tbody>
              {[
                { t: "11:52", area: "CBT", event: "WAEC Biology mock published to SSS 3", status: "Live" },
                { t: "11:35", area: "Reports", event: "Top 10 performance report refreshed", status: "Done" },
                { t: "10:44", area: "Classes", event: "SSS 2 Science result sheet viewed", status: "Viewed" },
                { t: "09:20", area: "Finance", event: "42 parent reminders queued", status: "Done" },
                { t: "08:10", area: "Attendance", event: "Daily register opened by staff", status: "Open" },
              ].map((r) => (
                <tr key={r.t + r.event} className="border-t">
                  <td className="p-4 text-muted-foreground">{r.t}</td><td className="font-medium">{r.area}</td><td>{r.event}</td>
                  <td className="p-4 text-right"><span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-primary">{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
