import { createFileRoute, Link } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ResultTable } from "@/components/dashboard/ResultTable";
import { getClassById, getStudentById } from "@/lib/school-data";

const trend = [
  { term: "JSS1 T1", score: 72 }, { term: "JSS1 T2", score: 76 }, { term: "JSS1 T3", score: 79 },
  { term: "JSS2 T1", score: 82 }, { term: "JSS2 T2", score: 85 }, { term: "Now", score: 88 },
];

export const Route = createFileRoute("/portal/admin/classes/$classId/students/$studentId")({
  head: () => ({ meta: [{ title: "Student Performance — Admin Console" }] }),
  component: StudentRecord,
});

function StudentRecord() {
  const { classId, studentId } = Route.useParams();
  const student = getStudentById(studentId);
  const klass = getClassById(classId);

  if (!student || !klass) {
    return <PortalShell role="admin" title="Student not found" subtitle="Choose another student from the class page."><Button asChild><Link to="/portal/admin/classes/$classId" params={{ classId }}>Back to class</Link></Button></PortalShell>;
  }

  return (
    <PortalShell role="admin" title={student.name} subtitle={`${student.klass} · Full performance and result profile`} action={<Button asChild variant="outline"><Link to="/portal/admin/classes/$classId" params={{ classId }}>Back to {klass.name}</Link></Button>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Average" value={`${student.avg}%`} accent="text-success" />
        <StatCard label="Class rank" value={`#${student.rank}`} />
        <StatCard label="Attendance" value={`${student.attendance}%`} />
        <StatCard label="Fees" value={student.fees} accent={student.fees === "Paid" ? "text-success" : "text-warning"} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold">Performance growth</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trend}>
              <defs><linearGradient id="studentTrend" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(280 75% 55%)" stopOpacity={0.45} /><stop offset="100%" stopColor="hsl(280 75% 55%)" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="term" fontSize={11} />
              <YAxis fontSize={11} domain={[60, 100]} />
              <Tooltip />
              <Area dataKey="score" stroke="hsl(280 75% 55%)" strokeWidth={3} fill="url(#studentTrend)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-3">
          <h3 className="mb-4 font-semibold">Current term result</h3>
          <ResultTable />
        </div>
      </div>
    </PortalShell>
  );
}
