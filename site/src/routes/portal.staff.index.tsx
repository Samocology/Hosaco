import { createFileRoute } from "@tanstack/react-router";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";

export const Route = createFileRoute("/portal/staff/")({
  head: () => ({ meta: [{ title: "Staff Dashboard — Holy Saviours College" }] }),
  component: StaffDash,
});

const revenue = [
  { m: "Apr", v: 4.2 }, { m: "May", v: 5.1 }, { m: "Jun", v: 4.8 },
  { m: "Jul", v: 6.3 }, { m: "Aug", v: 7.1 }, { m: "Sep", v: 8.4 },
];
const enrolment = [
  { name: "JSS", value: 540 }, { name: "SSS Sciences", value: 320 },
  { name: "SSS Commercial", value: 210 }, { name: "SSS Arts", value: 140 },
];
const COLORS = ["hsl(280 75% 55%)", "hsl(300 80% 65%)", "hsl(260 70% 55%)", "hsl(320 75% 65%)"];

function StaffDash() {
  return (
    <PortalShell role="staff" title="School overview" subtitle="Live snapshot of academic, financial and operational metrics.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Students" value="1,210" hint="↑ 38 this term" accent="text-success" />
        <StatCard label="Teachers" value="84" hint="12:1 ratio" />
        <StatCard label="Revenue (term)" value="₦184m" hint="↑ 12% YoY" accent="text-success" />
        <StatCard label="Attendance" value="94%" hint="Today" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold">Revenue (₦ millions)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenue}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="m" fontSize={11} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Bar dataKey="v" fill="hsl(280 75% 55%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Enrolment mix</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={enrolment} dataKey="value" innerRadius={55} outerRadius={85} paddingAngle={3}>
                {enrolment.map((_, i) => (<Cell key={i} fill={COLORS[i]} />))}
              </Pie>
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PortalShell>
  );
}
