import { createFileRoute } from "@tanstack/react-router";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

export const Route = createFileRoute("/portal/parent/")({
  head: () => ({ meta: [{ title: "Parent Portal — Holy Saviours College" }] }),
  component: ParentDash,
});

const performance = [
  { term: "T1 '23", score: 72 }, { term: "T2 '23", score: 78 }, { term: "T3 '23", score: 81 },
  { term: "T1 '24", score: 84 }, { term: "T2 '24", score: 88 }, { term: "T3 '24", score: 91 },
];
const subjects = [
  { s: "Math", v: 91 }, { s: "English", v: 86 }, { s: "Physics", v: 78 },
  { s: "Chem", v: 84 }, { s: "Biology", v: 92 }, { s: "Lit", v: 80 },
];

function ParentDash() {
  return (
    <PortalShell role="parent" title="Good morning, Adaeze 👋" subtitle="Here's a snapshot of Chidera's week.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Overall avg" value="88%" hint="↑ 4% vs last term" accent="text-success" />
        <StatCard label="Attendance" value="96%" hint="42 of 44 days present" accent="text-success" />
        <StatCard label="Assignments" value="12/14" hint="2 due this week" />
        <StatCard label="Outstanding fees" value="₦125,000" hint="Due Oct 31" accent="text-warning" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Academic performance</h3>
            <span className="text-xs text-muted-foreground">Last 6 terms</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={performance}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="term" fontSize={11} />
              <YAxis fontSize={11} domain={[60, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="hsl(280 75% 55%)" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Subjects this term</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={subjects}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="s" fontSize={11} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Bar dataKey="v" fill="hsl(280 75% 55%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PortalShell>
  );
}
