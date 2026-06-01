import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { CLASSES, getStudentsByClass } from "@/lib/school-data";

export const Route = createFileRoute("/portal/admin/classes")({
  head: () => ({ meta: [{ title: "Classes — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Classes" subtitle="Open any class to see students, performance and full records.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLASSES.map((klass) => {
          const sample = getStudentsByClass(klass.id);
          const avg = sample.length ? Math.round(sample.reduce((sum, student) => sum + student.avg, 0) / sample.length) : 82;
          return (
            <div key={klass.id} className="rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><GraduationCap className="h-5 w-5" /></div>
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">{avg}% avg</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{klass.name}</h3>
              <p className="text-sm text-muted-foreground">{klass.room} · Head: {klass.lead}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-muted p-3"><div className="text-muted-foreground">Arms</div><div className="font-semibold">{klass.arms}</div></div>
                <div className="rounded-xl bg-muted p-3"><div className="text-muted-foreground">Students</div><div className="font-semibold">{klass.students}</div></div>
              </div>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link to="/portal/admin/classes/$classId" params={{ classId: klass.id }}>Open class <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          );
        })}
      </div>
    </PortalShell>
  ),
});
