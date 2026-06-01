import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Award, TrendingUp, Users } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { STUDENTS } from "@/lib/school-data";

const classPerformance = [
  { klass: "JSS 1", avg: 79 }, { klass: "JSS 2", avg: 83 }, { klass: "JSS 3", avg: 81 },
  { klass: "SSS 1", avg: 86 }, { klass: "SSS 2", avg: 88 }, { klass: "SSS 3", avg: 91 },
];

export const Route = createFileRoute("/portal/admin/reports")({
  head: () => ({ meta: [{ title: "Reports — Admin Console" }] }),
  component: ReportsPage,
});

function ReportsPage() {
  const ranked = [...STUDENTS].sort((a, b) => b.avg - a.avg);
  return (
    <PortalShell role="admin" title="Student performance reports" subtitle="Professional ranking, class analysis and academic insights.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="School average" value="86%" hint="+4% from last term" accent="text-success" />
        <StatCard label="Top performer" value={ranked[0].name.split(" ")[0]} hint={`${ranked[0].avg}% overall`} />
        <StatCard label="At-risk students" value="14" hint="Need mentoring" accent="text-warning" />
        <StatCard label="Attendance impact" value="+11%" hint="High attendance score lift" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-3">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><TrendingUp className="h-4 w-4 text-primary" /> Class performance comparison</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="klass" fontSize={11} />
              <YAxis fontSize={11} domain={[60, 100]} />
              <Tooltip />
              <Bar dataKey="avg" fill="hsl(280 75% 55%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><Award className="h-4 w-4 text-primary" /> Top 10 students</h3>
          <div className="space-y-3">
            {ranked.slice(0, 10).map((student, index) => (
              <div key={student.id} className="flex items-center justify-between rounded-xl bg-muted p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">{index + 1}</div>
                  <div><div className="text-sm font-semibold">{student.name}</div><div className="text-xs text-muted-foreground">{student.klass}</div></div>
                </div>
                <div className="font-semibold">{student.avg}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 flex items-center gap-2 font-semibold"><Users className="h-4 w-4 text-primary" /> Highest to lowest performance table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground"><tr><th className="pb-2 text-left font-medium">Rank</th><th className="text-left">Student</th><th className="text-left">Class</th><th className="text-center">Average</th><th className="text-center">Attendance</th><th className="text-right">Status</th></tr></thead>
            <tbody>
              {ranked.map((student, index) => (
                <tr key={student.id} className="border-t">
                  <td className="py-3">#{index + 1}</td><td className="font-medium">{student.name}</td><td>{student.klass}</td><td className="text-center">{student.avg}%</td><td className="text-center">{student.attendance}%</td><td className="text-right"><span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-primary">{student.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  );
}
