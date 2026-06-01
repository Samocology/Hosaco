import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";

const TEACHERS = [
  { n: "Mr. Bello", s: "Mathematics", c: "JSS 1 – SSS 3", e: "12 yrs" },
  { n: "Mrs. Adeyemi", s: "English Language", c: "JSS 1 – SSS 3", e: "9 yrs" },
  { n: "Mr. Eze", s: "Physics", c: "SSS 1 – 3", e: "7 yrs" },
  { n: "Mrs. Okoye", s: "Chemistry", c: "SSS 1 – 3", e: "11 yrs" },
  { n: "Dr. Adamu", s: "Biology", c: "SSS 1 – 3", e: "15 yrs" },
  { n: "Mr. Johnson", s: "Literature", c: "JSS 2 – SSS 3", e: "5 yrs" },
  { n: "Mrs. Ade", s: "French", c: "JSS 1 – 3", e: "6 yrs" },
  { n: "Mr. Okafor", s: "ICT", c: "JSS 1 – SSS 3", e: "4 yrs" },
];

export const Route = createFileRoute("/portal/staff/teachers")({
  head: () => ({ meta: [{ title: "Teachers — Staff Dashboard" }] }),
  component: () => (
    <PortalShell role="staff" title="Teachers" subtitle="84 teaching staff across all subjects.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEACHERS.map((t) => (
          <div key={t.n} className="rounded-2xl border bg-card p-5 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
              {t.n.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
            <div className="mt-3 font-semibold">{t.n}</div>
            <div className="text-sm text-primary">{t.s}</div>
            <div className="mt-2 text-xs text-muted-foreground">{t.c}</div>
            <div className="text-xs text-muted-foreground">Experience: {t.e}</div>
          </div>
        ))}
      </div>
    </PortalShell>
  ),
});
