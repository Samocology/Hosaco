import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Plus } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/portal/staff/assessments")({
  head: () => ({ meta: [{ title: "Assessments — Staff Dashboard" }] }),
  component: AssessmentsPage,
});

function AssessmentsPage() {
  const [created, setCreated] = useState(false);
  return (
    <PortalShell role="staff" title="Assessments" subtitle="Create assignments, tests and class tasks for students.">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Active tasks" value="18" />
        <StatCard label="Submissions" value="742" accent="text-success" />
        <StatCard label="Pending grading" value="63" accent="text-warning" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="space-y-3">
          {[
            { t: "Algebra Worksheet 4", c: "SSS 2 Science", s: "Assignment", due: "Friday", done: "86/105" },
            { t: "Biology Cell Structure Test", c: "SSS 1 Science", s: "Test", due: "Monday", done: "91/110" },
            { t: "English Essay Draft", c: "JSS 3", s: "Class task", due: "Wednesday", done: "144/185" },
          ].map((item) => (
            <div key={item.t} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card p-5 shadow-card">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary"><ClipboardCheck className="h-4 w-4" /> {item.s}</div>
                <h3 className="mt-1 font-semibold">{item.t}</h3>
                <p className="text-sm text-muted-foreground">{item.c} · Due {item.due} · {item.done} submitted</p>
              </div>
              <Button variant="outline">Review</Button>
            </div>
          ))}
        </section>
        <form onSubmit={(e) => { e.preventDefault(); setCreated(true); }} className="h-fit rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><Plus className="h-4 w-4 text-primary" /> Create assessment</h3>
          <div className="space-y-3">
            <div><Label>Title</Label><Input required placeholder="Assignment or test title" /></div>
            <div><Label>Class</Label><Input required placeholder="SSS 2 Science" /></div>
            <div><Label>Due date</Label><Input type="date" /></div>
            <div><Label>Instructions</Label><Textarea rows={5} placeholder="Questions, test instructions or upload notes…" /></div>
            <div><Label>Attachment</Label><Input type="file" /></div>
            {created && <div className="rounded-xl bg-success/10 p-3 text-sm font-medium text-success">Assessment sent to students in demo mode.</div>}
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">Publish assessment</Button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
