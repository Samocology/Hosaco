import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MonitorCheck, Plus, RadioTower, Users } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const liveQuestions = [
  { exam: "WAEC Mock", subject: "Biology", className: "SSS 3 Science", questions: 60, status: "Live", students: 94 },
  { exam: "JAMB Drill", subject: "Use of English", className: "SSS 2", questions: 40, status: "Scheduled", students: 128 },
  { exam: "BECE Prep", subject: "Basic Science", className: "JSS 3", questions: 35, status: "Draft", students: 185 },
];

export const Route = createFileRoute("/portal/admin/cbt")({
  head: () => ({ meta: [{ title: "CBT — Admin Console" }] }),
  component: AdminCbt,
});

function AdminCbt() {
  const [published, setPublished] = useState(false);
  return (
    <PortalShell role="admin" title="CBT Control" subtitle="Post live questions and manage exams students can see instantly in their CBT area.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Live exams" value="1" accent="text-success" />
        <StatCard label="Question banks" value="2,840" />
        <StatCard label="Students online" value="384" accent="text-success" />
        <StatCard label="Avg completion" value="78%" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_400px]">
        <section className="space-y-4">
          {liveQuestions.map((item) => (
            <article key={item.exam} className="rounded-2xl border bg-card p-5 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary"><MonitorCheck className="h-4 w-4" /> {item.subject} · {item.className}</div>
                  <h3 className="mt-1 font-display text-xl font-bold">{item.exam}</h3>
                  <p className="text-sm text-muted-foreground">{item.questions} questions · {item.students} students assigned</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Live" ? "bg-success/10 text-success" : item.status === "Scheduled" ? "bg-warning/15 text-warning" : "bg-muted text-muted-foreground"}`}>{item.status}</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Button variant="outline">Preview</Button>
                <Button variant="outline">Edit questions</Button>
                <Button className="bg-gradient-primary text-primary-foreground"><RadioTower className="mr-2 h-4 w-4" /> Go live</Button>
              </div>
            </article>
          ))}
        </section>
        <form onSubmit={(e) => { e.preventDefault(); setPublished(true); }} className="h-fit rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><Plus className="h-4 w-4 text-primary" /> Create live CBT</h3>
          <div className="space-y-3">
            <div><Label>Exam title</Label><Input required placeholder="e.g. JAMB Mathematics Drill" /></div>
            <div><Label>Exam type</Label><Select defaultValue="jamb"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="jamb">JAMB</SelectItem><SelectItem value="waec">WAEC</SelectItem><SelectItem value="neco">NECO</SelectItem><SelectItem value="gce">GCE</SelectItem><SelectItem value="bece">BECE</SelectItem></SelectContent></Select></div>
            <div><Label>Class / audience</Label><Input defaultValue="SSS 3 Science" /></div>
            <div><Label>Duration</Label><Input defaultValue="60 minutes" /></div>
            <div><Label>Questions</Label><Textarea rows={6} placeholder="Paste questions here. Use A-D options and mark the correct answer." /></div>
            {published && <div className="rounded-xl bg-success/10 p-3 text-sm font-medium text-success">CBT published live to assigned students in demo mode.</div>}
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground"><Users className="mr-2 h-4 w-4" /> Publish to students</Button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
