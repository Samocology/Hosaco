import { createFileRoute } from "@tanstack/react-router";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Progress } from "@/components/ui/progress";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/portal/student/")({
  head: () => ({ meta: [{ title: "Student Portal — Holy Saviours College" }] }),
  component: StudentDash,
});

const radar = [
  { s: "Math", v: 92 }, { s: "English", v: 84 }, { s: "Physics", v: 78 },
  { s: "Chem", v: 86 }, { s: "Bio", v: 90 }, { s: "Lit", v: 80 },
];
const trend = Array.from({ length: 8 }, (_, i) => ({ w: `W${i + 1}`, v: 65 + Math.round(Math.sin(i) * 5) + i * 2 }));

function StudentDash() {
  return (
    <PortalShell
      role="student"
      title="Welcome back, Chidera ✨"
      subtitle="You're on a 12-day streak — keep it going!"
      action={
        <div className="flex items-center gap-2 rounded-full border bg-gradient-primary px-4 py-2 text-primary-foreground shadow-glow">
          <Trophy className="h-4 w-4" />
          <span className="text-sm font-semibold">2,480 XP</span>
          <span className="text-xs opacity-80">· Level 8</span>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Overall" value="88%" hint="Top 5% of class" accent="text-success" />
        <StatCard label="Streak" value="12 days" hint="Personal best!" accent="text-warning" />
        <StatCard label="Assignments" value="12/14" hint="2 due Friday" />
        <StatCard label="Badges" value="9" hint="3 new this term" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold">Progress trend</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={trend}>
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(280 75% 55%)" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="hsl(280 75% 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="w" fontSize={11} />
              <YAxis fontSize={11} domain={[50, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="v" stroke="hsl(280 75% 55%)" strokeWidth={2.5} fill="url(#ag)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 font-semibold">Subject mastery</h3>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={radar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="s" fontSize={11} />
              <Radar dataKey="v" stroke="hsl(280 75% 55%)" fill="hsl(280 75% 55%)" fillOpacity={0.35} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
        <h3 className="mb-4 font-semibold">Next badge — Math Maestro · Level 3</h3>
        <Progress value={70} className="h-2" />
        <p className="mt-2 text-xs text-muted-foreground">Complete 5 more advanced problems to unlock.</p>
      </div>
    </PortalShell>
  );
}
