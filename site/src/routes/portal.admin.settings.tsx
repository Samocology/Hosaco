import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/portal/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Settings" subtitle="Platform-wide configuration.">
      <form onSubmit={(e) => { e.preventDefault(); }} className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Branding</h3>
          <div className="space-y-3">
            <div><Label>Platform name</Label><Input defaultValue="Holy Saviours Platform" /></div>
            <div><Label>Support email</Label><Input type="email" defaultValue="support@holysaviours.edu.ng" /></div>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Integrations</h3>
          <div className="space-y-3">
            <div><Label>Paystack public key</Label><Input defaultValue="pk_live_•••••••••••••" /></div>
            <div><Label>SMS provider</Label><Input defaultValue="Termii" /></div>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold">Policies</h3>
          {[
            { t: "Require 2FA for all staff", v: true },
            { t: "Allow parent self-service password reset", v: true },
            { t: "Public admissions form", v: true },
            { t: "Maintenance mode", v: false },
          ].map((s) => (
            <div key={s.t} className="flex items-center justify-between border-b py-3 last:border-0">
              <span className="text-sm">{s.t}</span>
              <Switch defaultChecked={s.v} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-2"><Button type="submit" className="bg-gradient-primary text-primary-foreground">Save configuration</Button></div>
      </form>
    </PortalShell>
  ),
});
