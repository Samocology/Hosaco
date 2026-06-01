import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";

const STUDENTS = [
  { n: "Chidera Okafor", c: "SSS 2 Sci", g: 88, att: 96 },
  { n: "Tomiwa Adebayo", c: "SSS 3 Sci", g: 92, att: 98 },
  { n: "Ifeoma Eze", c: "JSS 3", g: 81, att: 94 },
  { n: "Bola Adekunle", c: "SSS 1 Com", g: 76, att: 91 },
  { n: "Aisha Bello", c: "JSS 2", g: 84, att: 97 },
  { n: "Femi Ojo", c: "SSS 2 Arts", g: 79, att: 89 },
  { n: "Ngozi Umeh", c: "SSS 3 Sci", g: 95, att: 99 },
  { n: "Kelechi Nwosu", c: "JSS 1", g: 73, att: 92 },
];

export const Route = createFileRoute("/portal/staff/students")({
  head: () => ({ meta: [{ title: "Students — Staff Dashboard" }] }),
  component: StudentsPage,
});

function StudentsPage() {
  const [students, setStudents] = useState(STUDENTS);
  const [added, setAdded] = useState(false);

  return (
    <PortalShell role="staff" title="Students" subtitle="1,210 enrolled · 84 teachers">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section>
          <div className="mb-4 relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search students…" className="pl-9" />
          </div>
          <div className="rounded-2xl border bg-card shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase text-muted-foreground">
                  <tr><th className="p-4 text-left font-medium">Name</th><th className="text-left">Class</th><th className="text-center">Avg</th><th className="text-center">Attendance</th><th className="text-right p-4">Status</th></tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.n} className="border-t">
                      <td className="p-4 font-medium">{s.n}</td>
                      <td>{s.c}</td>
                      <td className="text-center">{s.g}%</td>
                      <td className="text-center">{s.att}%</td>
                      <td className="p-4 text-right"><span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <form onSubmit={(e) => { e.preventDefault(); setStudents([{ n: "New Student", c: "JSS 1", g: 0, att: 100 }, ...students]); setAdded(true); e.currentTarget.reset(); }} className="h-fit rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><Plus className="h-4 w-4 text-primary" /> Add new student</h3>
          <div className="space-y-3">
            <div><Label>Student name</Label><Input required placeholder="Full name" /></div>
            <div><Label>Class</Label><Input required placeholder="e.g. JSS 1" /></div>
            <div><Label>Parent email</Label><Input type="email" placeholder="parent@email.com" /></div>
            <div><Label>Admission number</Label><Input placeholder="HSC/2026/001" /></div>
            {added && <div className="rounded-xl bg-success/10 p-3 text-sm font-medium text-success">Student added to the list in demo mode.</div>}
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">Add student</Button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
