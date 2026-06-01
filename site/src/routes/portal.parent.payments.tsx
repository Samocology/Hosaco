import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/portal/parent/payments")({
  head: () => ({ meta: [{ title: "Payments — Parent Portal" }] }),
  component: () => (
    <PortalShell role="parent" title="Payments" subtitle="School fees, invoices and receipts.">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Outstanding" value="₦125,000" hint="Due Oct 31" accent="text-warning" />
        <StatCard label="Paid this term" value="₦513,000" accent="text-success" />
        <StatCard label="Next invoice" value="Nov 12" />
      </div>
      <div className="mt-6 rounded-2xl border bg-gradient-primary p-6 text-primary-foreground shadow-elegant">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold">Term 1 balance — ₦125,000</h3>
            <p className="text-sm opacity-90">Pay securely via Paystack. Receipt emailed instantly.</p>
          </div>
          <Button onClick={(e) => { e.currentTarget.textContent = "Payment queued"; }} variant="secondary" className="bg-background text-primary hover:bg-background/90">
            Pay now
          </Button>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 font-semibold">Payment history</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="pb-2 text-left font-medium">Date</th><th className="text-left">Item</th><th className="text-left">Method</th><th className="text-right">Amount</th></tr>
            </thead>
            <tbody>
              {[
                { d: "Sep 12", i: "Tuition — Term 1", m: "Paystack", a: "₦450,000" },
                { d: "Aug 30", i: "Books & materials", m: "Transfer", a: "₦35,000" },
                { d: "Aug 15", i: "Uniform", m: "Paystack", a: "₦28,000" },
                { d: "Jun 10", i: "Tuition — Term 3", m: "Paystack", a: "₦450,000" },
              ].map((r) => (
                <tr key={r.d} className="border-t">
                  <td className="py-2.5">{r.d}</td><td>{r.i}</td><td className="text-muted-foreground">{r.m}</td>
                  <td className="text-right font-medium">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
