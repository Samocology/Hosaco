import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Bell, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/portal/student/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Student Portal" }] }),
  component: () => {
    const items = [
      { i: CheckCircle2, c: "text-success", t: "Chemistry quiz graded", b: "You scored 96% — great work!", d: "10 min ago" },
      { i: Bell, c: "text-primary", t: "New assignment: Physics lab", b: "Due Wednesday by 4pm.", d: "1 hour ago" },
      { i: Info, c: "text-primary", t: "Library book due soon", b: '"Things Fall Apart" — return by Friday.', d: "Yesterday" },
      { i: AlertTriangle, c: "text-warning", t: "Schedule change", b: "Math class moved to 11am tomorrow.", d: "2 days ago" },
    ];
    return (
      <PortalShell role="student" title="Notifications" subtitle="Everything that needs your attention.">
        <ul className="space-y-3">
          {items.map((n) => (
            <li key={n.t} className="flex gap-4 rounded-2xl border bg-card p-4 shadow-card">
              <n.i className={`mt-0.5 h-5 w-5 shrink-0 ${n.c}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{n.t}</span>
                  <span className="text-xs text-muted-foreground">{n.d}</span>
                </div>
                <p className="text-sm text-muted-foreground">{n.b}</p>
              </div>
            </li>
          ))}
        </ul>
      </PortalShell>
    );
  },
});
