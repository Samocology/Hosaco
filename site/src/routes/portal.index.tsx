import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, ShieldCheck, ArrowRight, Lock, KeyRound } from "lucide-react";

export const Route = createFileRoute("/portal/")({
  head: () => ({ meta: [{ title: "Portals — Holy Saviours College" }, { name: "description", content: "Sign in to the parent, student, staff or admin portal." }] }),
  component: Portal,
});

const portals = [
  { icon: Users, t: "Parent Portal", b: "Track your child's progress, attendance, fees and messages.", to: "/portal/parent" },
  { icon: GraduationCap, t: "Student Portal", b: "Your dashboard, results, assignments and achievements.", to: "/portal/student" },
  { icon: ShieldCheck, t: "Staff Dashboard", b: "Teachers & administrators — manage results, attendance and more.", to: "/portal/staff" },
  { icon: KeyRound, t: "Admin Console", b: "System owners — manage users, finance, security and platform settings.", to: "/portal/admin" },
];

function Portal() {
  return (
    <SiteLayout>
      <Section eyebrow="Portals" title="Sign in to your dashboard.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portals.map(p => (
            <Card key={p.t} className="group flex h-full flex-col rounded-3xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{p.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.b}</p>
              <Button asChild className="mt-6 bg-gradient-primary text-primary-foreground">
                <Link to={p.to}>Open dashboard <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-3 rounded-2xl border bg-accent/40 p-5 text-sm text-muted-foreground">
          <Lock className="mt-0.5 h-4 w-4 text-primary" />
          <div>
            <strong className="text-foreground">Demo mode.</strong> These dashboards currently run as a frontend-only experience with sample school data.
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
