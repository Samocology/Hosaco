import { createFileRoute } from "@tanstack/react-router";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

export const Route = createFileRoute("/portal/admin/")({
  head: () => ({ meta: [{ title: "Admin Console — Holy Saviours College" }] }),
  component: AdminDash,
});

const performance = [
  { term: "T1", avg: 74 }, { term: "T2", avg: 78 }, { term: "T3", avg: 81 },
  { term: "T4", avg: 84 }, { term: "T5", avg: 86 }, { term: "T6", avg: 88 },
];
const attendance = [
  { day: "Mon", value: 94 }, { day: "Tue", value: 96 }, { day: "Wed", value: 95 },
  { day: "Thu", value: 97 }, { day: "Fri", value: 93 },
];

function AdminDash() {
  return (
    <PortalShell role="admin" title="School command centre" subtitle="A clear daily picture of learning, attendance, fees and parent engagement.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Students enrolled" value="1,210" hint="38 new this term" accent="text-success" />
        <StatCard label="Average performance" value="88%" hint="Up 4% vs last term" accent="text-success" />
        <StatCard label="Attendance today" value="94%" hint="15 absences to follow up" />
        <StatCard label="Fees collected" value="91%" hint="₦42m outstanding" accent="text-warning" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold">Whole-school academic growth</h3>
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Healthy improvement</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={performance}>
              <defs>
                <linearGradient id="schoolGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(280 75% 55%)" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="hsl(280 75% 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="term" fontSize={11} />
              <YAxis fontSize={11} domain={[60, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="avg" stroke="hsl(280 75% 55%)" strokeWidth={3} fill="url(#schoolGrowth)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">This week attendance</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={attendance}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="day" fontSize={11} />
              <YAxis fontSize={11} domain={[80, 100]} />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(280 75% 55%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { title: "Top priority", body: "Follow up with 15 absent students before close of day." },
          { title: "CBT readiness", body: "WAEC mock bank is 82% complete; 4 subjects need review." },
          { title: "Parent engagement", body: "428 parents opened weekly reports in the last 24 hours." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border bg-gradient-soft p-5 shadow-card">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.title}</div>
            <p className="mt-2 text-sm font-medium">{item.body}</p>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
