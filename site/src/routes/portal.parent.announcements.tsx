import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/portal/parent/announcements")({
  head: () => ({ meta: [{ title: "Announcements — Parent Portal" }] }),
  component: () => (
    <PortalShell role="parent" title="Announcements" subtitle="Official updates from the school.">
      <ul className="space-y-4">
        {[
          { t: "Mid-term break", b: "School closes Friday Oct 18 and resumes Monday Oct 28.", d: "2 days ago", tag: "Calendar" },
          { t: "PTA meeting", b: "Saturday Oct 19 at 10am in the Main Hall. Light refreshments served.", d: "4 days ago", tag: "Event" },
          { t: "Inter-house sports", b: "Friday Oct 25 — all parents are warmly invited to attend.", d: "1 week ago", tag: "Event" },
          { t: "New uniform supplier", b: "Effective from next session. Pre-orders open Nov 1.", d: "2 weeks ago", tag: "Notice" },
        ].map((a) => (
          <li key={a.t} className="flex gap-4 rounded-2xl border bg-card p-5 shadow-card">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <Megaphone className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{a.t}</h3>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">{a.tag}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{a.b}</p>
              <div className="mt-2 text-xs text-muted-foreground">{a.d}</div>
            </div>
          </li>
        ))}
      </ul>
    </PortalShell>
  ),
});
