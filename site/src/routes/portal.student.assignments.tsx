import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export const Route = createFileRoute("/portal/student/assignments")({
  head: () => ({ meta: [{ title: "Assignments — Student Portal" }] }),
  component: () => {
    const [submitted, setSubmitted] = useState(false);
    return (
    <PortalShell role="student" title="Assignments" subtitle="Stay on top of your workload.">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Submitted" value="12" accent="text-success" />
        <StatCard label="In progress" value="2" />
        <StatCard label="Overdue" value="0" accent="text-success" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-3">
          {[
            { t: "Algebra Worksheet 4", c: "Math · Mr. Bello", d: "Due Fri", p: 80, s: "in-progress" },
            { t: "Essay: Things Fall Apart", c: "Literature · Mrs. Adeyemi", d: "Due Mon", p: 40, s: "in-progress" },
            { t: "Lab Report: Newton's Laws", c: "Physics · Mr. Eze", d: "Due Wed", p: 10, s: "not-started" },
            { t: "Periodic Table Quiz", c: "Chemistry · Mrs. Okoye", d: "Submitted", p: 100, s: "done" },
          ].map((a) => (
            <div key={a.t} className="rounded-2xl border bg-card p-5 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.c} · {a.d}</div>
                </div>
                <Button size="sm" variant={a.s === "done" ? "outline" : "default"} className={a.s === "done" ? "" : "bg-gradient-primary text-primary-foreground"}>
                  {a.s === "done" ? "View" : "Open"}
                </Button>
              </div>
              <Progress value={a.p} className="mt-3 h-1.5" />
            </div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="h-fit rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><UploadCloud className="h-4 w-4 text-primary" /> Submit assignment</h3>
          <div className="space-y-3">
            <div><Label>Assignment</Label><Input defaultValue="Algebra Worksheet 4" /></div>
            <div><Label>Upload file</Label><Input type="file" /></div>
            <div><Label>Note to teacher</Label><Textarea rows={4} placeholder="Add a short note…" /></div>
            {submitted && <div className="rounded-xl bg-success/10 p-3 text-sm font-medium text-success">Submission received in demo mode.</div>}
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">Submit work</Button>
          </div>
        </form>
      </div>
    </PortalShell>
    );
  },
});
