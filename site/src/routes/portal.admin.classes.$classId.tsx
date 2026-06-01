import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { getClassById, getStudentsByClass } from "@/lib/school-data";

export const Route = createFileRoute("/portal/admin/classes/$classId")({
  head: () => ({ meta: [{ title: "Class Detail — Admin Console" }] }),
  component: ClassDetail,
});

function ClassDetail() {
  const { classId } = Route.useParams();
  const klass = getClassById(classId);
  const students = getStudentsByClass(classId);
  const avg = students.length ? Math.round(students.reduce((sum, student) => sum + student.avg, 0) / students.length) : 82;

  if (!klass) {
    return <PortalShell role="admin" title="Class not found" subtitle="Choose another class from the Classes page."><Button asChild><Link to="/portal/admin/classes">Back to classes</Link></Button></PortalShell>;
  }

  return (
    <PortalShell role="admin" title={klass.name} subtitle={`${klass.room} · Head teacher: ${klass.lead}`} action={<Button asChild variant="outline"><Link to="/portal/admin/classes">Back to classes</Link></Button>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Students" value={`${klass.students}`} />
        <StatCard label="Class arms" value={`${klass.arms}`} />
        <StatCard label="Average score" value={`${avg}%`} accent="text-success" />
        <StatCard label="Attendance" value="95%" />
      </div>
      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 flex items-center gap-2 font-semibold"><Users className="h-4 w-4 text-primary" /> Students in this class</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="pb-2 text-left font-medium">Student</th><th className="text-center">Average</th><th className="text-center">Rank</th><th className="text-center">Attendance</th><th className="text-right">Open</th></tr>
            </thead>
            <tbody>
              {(students.length ? students : []).map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="py-3 font-medium">{student.name}</td>
                  <td className="text-center">{student.avg}%</td>
                  <td className="text-center">#{student.rank}</td>
                  <td className="text-center">{student.attendance}%</td>
                  <td className="text-right">
                    <Button asChild variant="ghost" size="sm"><Link to="/portal/admin/classes/$classId/students/$studentId" params={{ classId, studentId: student.id }}>View <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!students.length && <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">No demo students are attached to this class yet.</div>}
      </div>
    </PortalShell>
  );
}
