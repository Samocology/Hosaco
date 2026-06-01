import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";

export const Route = createFileRoute("/portal/admin/audit")({
  head: () => ({ meta: [{ title: "Audit logs — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Audit logs" subtitle="Every meaningful action on the platform.">
      <div className="rounded-2xl border bg-card shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="p-4 text-left font-medium">Time</th><th className="text-left">Actor</th><th className="text-left">Action</th><th className="text-left">Target</th><th className="text-right p-4">IP</th></tr>
            </thead>
            <tbody>
              {[
                { t: "11:42", u: "Funke Adeola", a: "Updated grades", g: "SSS 2 Sci — Math", ip: "102.89.10.4" },
                { t: "11:30", u: "Mr. Bello", a: "Created assignment", g: "Algebra Worksheet 4", ip: "102.89.10.4" },
                { t: "10:14", u: "System", a: "Sent fee reminder", g: "42 parents", ip: "—" },
                { t: "09:58", u: "Tunde Bakare", a: "Granted role", g: "Mrs. Ade → Teacher", ip: "197.210.5.2" },
                { t: "09:02", u: "Mrs. Okafor", a: "Paid fees", g: "₦450,000 · Paystack", ip: "129.205.1.8" },
                { t: "08:30", u: "System", a: "Published announcement", g: "Mid-term break", ip: "—" },
              ].map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 text-muted-foreground">{r.t}</td><td className="font-medium">{r.u}</td>
                  <td>{r.a}</td><td className="text-muted-foreground">{r.g}</td>
                  <td className="p-4 text-right text-xs text-muted-foreground">{r.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
