import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";

export const Route = createFileRoute("/portal/staff/payments")({
  head: () => ({ meta: [{ title: "Payments — Staff Dashboard" }] }),
  component: () => (
    <PortalShell role="staff" title="Payments" subtitle="Fee collections, outstanding balances and Paystack settlements.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Collected (term)" value="₦184m" accent="text-success" />
        <StatCard label="Outstanding" value="₦42m" accent="text-warning" />
        <StatCard label="Paystack fees" value="₦2.3m" />
        <StatCard label="Settlement (today)" value="₦5.1m" accent="text-success" />
      </div>
      <div className="mt-6 rounded-2xl border bg-card shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="p-4 text-left font-medium">Date</th><th className="text-left">Parent</th><th className="text-left">Student</th><th className="text-left">Method</th><th className="text-right p-4">Amount</th></tr>
            </thead>
            <tbody>
              {[
                { d: "Oct 10", p: "Mrs. Okafor", s: "Chidera Okafor", m: "Paystack", a: "₦450,000" },
                { d: "Oct 10", p: "Mr. Adebayo", s: "Tomiwa Adebayo", m: "Paystack", a: "₦450,000" },
                { d: "Oct 09", p: "Mr. Eze", s: "Ifeoma Eze", m: "Transfer", a: "₦325,000" },
                { d: "Oct 09", p: "Mrs. Bello", s: "Aisha Bello", m: "Paystack", a: "₦325,000" },
                { d: "Oct 08", p: "Mr. Ojo", s: "Femi Ojo", m: "Cash", a: "₦450,000" },
              ].map((r) => (
                <tr key={r.d + r.s} className="border-t">
                  <td className="p-4">{r.d}</td><td>{r.p}</td><td>{r.s}</td>
                  <td className="text-muted-foreground">{r.m}</td>
                  <td className="p-4 text-right font-medium">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
