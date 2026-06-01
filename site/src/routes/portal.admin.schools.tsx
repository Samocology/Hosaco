import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";

const CLASSES = [
  { c: "JSS 1", a: 3, s: 180, t: "Mrs. Ade" },
  { c: "JSS 2", a: 3, s: 175, t: "Mr. Okafor" },
  { c: "JSS 3", a: 3, s: 185, t: "Mrs. Adeyemi" },
  { c: "SSS 1 Sciences", a: 2, s: 110, t: "Mr. Eze" },
  { c: "SSS 1 Commercial", a: 2, s: 70,  t: "Mr. Bello" },
  { c: "SSS 1 Arts", a: 1, s: 50, t: "Mr. Johnson" },
  { c: "SSS 2 Sciences", a: 2, s: 105, t: "Dr. Adamu" },
  { c: "SSS 2 Commercial", a: 2, s: 75, t: "Mrs. Okoye" },
  { c: "SSS 3 Sciences", a: 2, s: 105, t: "Mr. Bello" },
];

export const Route = createFileRoute("/portal/admin/schools")({
  head: () => ({ meta: [{ title: "Classes — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Classes" subtitle="All arms, head teachers and enrolment.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLASSES.map((c) => (
          <div key={c.c} className="rounded-2xl border bg-card p-5 shadow-card">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Class</div>
            <div className="mt-1 font-display text-xl font-bold">{c.c}</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><div className="text-muted-foreground">Arms</div><div className="font-semibold">{c.a}</div></div>
              <div><div className="text-muted-foreground">Students</div><div className="font-semibold">{c.s}</div></div>
            </div>
            <div className="mt-4 border-t pt-3 text-xs text-muted-foreground">Head: <span className="text-foreground">{c.t}</span></div>
          </div>
        ))}
      </div>
    </PortalShell>
  ),
});
