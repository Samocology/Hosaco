import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { ShieldCheck, AlertTriangle, KeyRound } from "lucide-react";

export const Route = createFileRoute("/portal/admin/security")({
  head: () => ({ meta: [{ title: "Security — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Security" subtitle="Access, sessions and threat alerts.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="MFA enabled" value="92%" accent="text-success" />
        <StatCard label="Active sessions" value="384" />
        <StatCard label="Failed logins (24h)" value="6" accent="text-warning" />
        <StatCard label="Blocked attempts" value="2" />
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 font-semibold">Recent security events</h3>
        <ul className="space-y-3">
          {[
            { i: ShieldCheck, c: "text-success", t: "MFA enrolled", b: "Mr. Bello enabled 2FA via authenticator app.", d: "12 min ago" },
            { i: AlertTriangle, c: "text-warning", t: "Multiple failed logins", b: "5 attempts from 197.210.x.x — auto-locked.", d: "1 hour ago" },
            { i: KeyRound, c: "text-primary", t: "Password reset", b: "Mrs. Okoye reset her password.", d: "3 hours ago" },
            { i: ShieldCheck, c: "text-success", t: "Role change", b: "Tunde Bakare granted Super Admin.", d: "Yesterday" },
          ].map((e) => (
            <li key={e.t} className="flex gap-4 rounded-xl border p-3">
              <e.i className={`mt-0.5 h-5 w-5 ${e.c}`} />
              <div className="flex-1">
                <div className="flex justify-between"><span className="font-semibold text-sm">{e.t}</span><span className="text-xs text-muted-foreground">{e.d}</span></div>
                <p className="text-sm text-muted-foreground">{e.b}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PortalShell>
  ),
});
