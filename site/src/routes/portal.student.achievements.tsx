import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Trophy, Star, Flame, Target, Award, BookOpen, Medal, Sparkles } from "lucide-react";

export const Route = createFileRoute("/portal/student/achievements")({
  head: () => ({ meta: [{ title: "Achievements — Student Portal" }] }),
  component: () => {
    const badges = [
      { i: Trophy, t: "Top 5%", d: "Top of class — Term 2" },
      { i: Flame, t: "12-day Streak", d: "Daily logins this month" },
      { i: Star, t: "Star Student", d: "Voted by teachers" },
      { i: Award, t: "Debate Champion", d: "Inter-house champion" },
      { i: Target, t: "Focused", d: "All assignments on time" },
      { i: BookOpen, t: "Bookworm", d: "Read 10 books this term" },
      { i: Medal, t: "Sports MVP", d: "Football, Term 1" },
      { i: Sparkles, t: "Innovator", d: "Robotics fair winner" },
    ];
    return (
      <PortalShell role="student" title="Achievements" subtitle="9 badges earned · 3 new this term">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.t} className="rounded-2xl border bg-gradient-soft p-5 text-center shadow-card">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <b.i className="h-7 w-7" />
              </div>
              <div className="mt-3 font-semibold">{b.t}</div>
              <div className="text-xs text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </PortalShell>
    );
  },
});
