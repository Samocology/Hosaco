import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/portal/staff/settings")({
  head: () => ({ meta: [{ title: "Settings — Staff Dashboard" }] }),
  component: () => (
    <PortalShell role="staff" title="Settings" subtitle="School profile, term dates and notifications.">
      <form onSubmit={(e) => { e.preventDefault(); }} className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">School profile</h3>
          <div className="space-y-3">
            <div><Label>School name</Label><Input defaultValue="Holy Saviours College" /></div>
            <div><Label>Address</Label><Input defaultValue="12 Saviours Way, Ikeja, Lagos" /></div>
            <div><Label>Phone</Label><Input defaultValue="+234 801 234 5678" /></div>
            <div><Label>Email</Label><Input type="email" defaultValue="hello@holysaviours.edu.ng" /></div>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Academic year</h3>
          <div className="space-y-3">
            <div><Label>Current session</Label><Input defaultValue="2025 / 2026" /></div>
            <div><Label>Current term</Label><Input defaultValue="Term 1" /></div>
            <div><Label>Term ends</Label><Input type="date" defaultValue="2025-12-12" /></div>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold">Notifications</h3>
          {[
            { t: "Email parents on grade publish", v: true },
            { t: "SMS reminders for unpaid fees", v: true },
            { t: "Weekly attendance digest", v: false },
          ].map((s) => (
            <div key={s.t} className="flex items-center justify-between border-b py-3 last:border-0">
              <span className="text-sm">{s.t}</span>
              <Switch defaultChecked={s.v} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-2"><Button type="submit" className="bg-gradient-primary text-primary-foreground">Save changes</Button></div>
      </form>
    </PortalShell>
  ),
});
