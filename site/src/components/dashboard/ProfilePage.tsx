import { ReactNode } from "react";
import { ShieldCheck, UserCircle, Mail, Phone, MapPin, KeyRound } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Role } from "@/lib/portal-nav";

const DETAILS: Record<Role, { title: string; name: string; email: string; phone: string; address: string; badges: string[] }> = {
  parent: {
    title: "Parent profile",
    name: "Adaeze Okafor",
    email: "adaeze.okafor@gmail.com",
    phone: "+234 803 210 7788",
    address: "Ikeja, Lagos",
    badges: ["Guardian", "Fee notifications", "Academic reports"],
  },
  student: {
    title: "Student profile",
    name: "Chidera Okafor",
    email: "chidera@holysaviours.edu.ng",
    phone: "+234 814 552 9010",
    address: "SSS 2 Science · Emerald House",
    badges: ["Level 8", "Science stream", "Top 5%"],
  },
  staff: {
    title: "Staff profile",
    name: "Dr. Funke Adeola",
    email: "funke@holysaviours.edu.ng",
    phone: "+234 802 441 9988",
    address: "Academic Office · Senior School",
    badges: ["Administrator", "Teacher access", "Reports"],
  },
  admin: {
    title: "Admin profile",
    name: "Mr. Tunde Bakare",
    email: "tunde@holysaviours.edu.ng",
    phone: "+234 806 777 1122",
    address: "School Leadership · Main Campus",
    badges: ["Super Admin", "CBT control", "Security settings"],
  },
};

function InfoLine({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
      <Icon className="h-4 w-4 text-primary" />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}

export function ProfilePage({ role }: { role: Role }) {
  const profile = DETAILS[role];
  return (
    <PortalShell role={role} title={profile.title} subtitle="Account details, preferences and security controls.">
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <section className="rounded-2xl border bg-card p-6 text-center shadow-card">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-primary text-3xl font-bold text-primary-foreground shadow-glow">
            {profile.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold">{profile.name}</h2>
          <p className="text-sm text-muted-foreground">Holy Saviours College</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {profile.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{badge}</span>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-left">
            <InfoLine icon={Mail} label="Email">{profile.email}</InfoLine>
            <InfoLine icon={Phone} label="Phone">{profile.phone}</InfoLine>
            <InfoLine icon={MapPin} label="Location / Unit">{profile.address}</InfoLine>
          </div>
        </section>

        <section className="space-y-6">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border bg-card p-6 shadow-card">
            <h3 className="mb-4 flex items-center gap-2 font-semibold"><UserCircle className="h-4 w-4 text-primary" /> Personal information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>Full name</Label><Input defaultValue={profile.name} /></div>
              <div><Label>Email</Label><Input type="email" defaultValue={profile.email} /></div>
              <div><Label>Phone</Label><Input defaultValue={profile.phone} /></div>
              <div><Label>Unit / class</Label><Input defaultValue={profile.address} /></div>
            </div>
            <Button type="submit" className="mt-5 bg-gradient-primary text-primary-foreground">Save profile</Button>
          </form>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h3 className="mb-4 flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4 text-primary" /> Security</h3>
              {[
                "Two-factor authentication",
                "Login alerts",
                "Require approval for new device",
              ].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b py-3 last:border-0">
                  <span className="text-sm">{item}</span>
                  <Switch defaultChecked={index < 2} />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h3 className="mb-4 flex items-center gap-2 font-semibold"><KeyRound className="h-4 w-4 text-primary" /> Access</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Last login</span><strong>Today, 8:42 AM</strong></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Active device</span><strong>Chrome · Lagos</strong></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Portal role</span><strong>{profile.badges[0]}</strong></div>
              </div>
              <Button variant="outline" className="mt-5 w-full">Change password</Button>
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
