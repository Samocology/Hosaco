import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ytd = [
  { m: "Jan", v: 28 }, { m: "Feb", v: 32 }, { m: "Mar", v: 30 },
  { m: "Apr", v: 42 }, { m: "May", v: 51 }, { m: "Jun", v: 48 },
  { m: "Jul", v: 63 }, { m: "Aug", v: 71 }, { m: "Sep", v: 84 },
];

export const Route = createFileRoute("/portal/admin/finance")({
  head: () => ({ meta: [{ title: "Finance — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Finance" subtitle="Revenue, payouts and outstanding balances.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="YTD revenue" value="₦449m" accent="text-success" />
        <StatCard label="Outstanding" value="₦42m" accent="text-warning" />
        <StatCard label="Avg fee / student" value="₦371k" />
        <StatCard label="Collection rate" value="91%" accent="text-success" />
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 font-semibold">Monthly revenue — ₦ millions</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={ytd}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="m" fontSize={11} />
            <YAxis fontSize={11} />
            <Tooltip />
            <Bar dataKey="v" fill="hsl(280 75% 55%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </PortalShell>
  ),
});
