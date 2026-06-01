import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/portal/staff/announcements")({
  head: () => ({ meta: [{ title: "Announcements — Staff Dashboard" }] }),
  component: () => (
    <PortalShell role="staff" title="Announcements" subtitle="Broadcast updates to parents, students and staff.">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Recent</h3>
          <ul className="space-y-4">
            {[
              { t: "Mid-term break", b: "School resumes Monday Oct 28.", d: "2d ago", a: "All parents · students" },
              { t: "PTA meeting", b: "Saturday Oct 19, 10am — Main Hall.", d: "4d ago", a: "All parents" },
              { t: "Inter-house sports", b: "Friday Oct 25 — all parents welcome.", d: "1w ago", a: "All" },
              { t: "Staff briefing", b: "Wed 8am, staff room.", d: "1w ago", a: "Staff only" },
            ].map((a) => (
              <li key={a.t} className="border-l-2 border-primary pl-4">
                <div className="text-sm font-semibold">{a.t}</div>
                <div className="text-sm text-muted-foreground">{a.b}</div>
                <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                  <span>{a.d}</span><span>·</span><span>{a.a}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); (e.target as HTMLFormElement).reset(); }}
          className="h-fit rounded-2xl border bg-card p-5 shadow-card"
        >
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><Plus className="h-4 w-4" /> New announcement</h3>
          <div className="space-y-3">
            <Input required placeholder="Title" />
            <Textarea required placeholder="Write your message…" rows={5} />
            <select className="w-full rounded-md border bg-background px-3 py-2 text-sm">
              <option>All parents & students</option>
              <option>Parents only</option>
              <option>Students only</option>
              <option>Staff only</option>
            </select>
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">Publish</Button>
          </div>
        </form>
      </div>
    </PortalShell>
  ),
});
