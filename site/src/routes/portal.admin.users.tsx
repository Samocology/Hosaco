import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export const Route = createFileRoute("/portal/admin/users")({
  head: () => ({ meta: [{ title: "Users — Admin Console" }] }),
  component: () => (
    <PortalShell role="admin" title="Users" subtitle="Manage all platform accounts and roles." action={<Button className="bg-gradient-primary text-primary-foreground"><Plus className="mr-1 h-4 w-4" /> Invite user</Button>}>
      <div className="mb-4 relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search users…" className="pl-9" />
      </div>
      <div className="rounded-2xl border bg-card shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr><th className="p-4 text-left font-medium">Name</th><th className="text-left">Email</th><th className="text-left">Role</th><th className="text-left">Last active</th><th className="text-right p-4">Status</th></tr>
            </thead>
            <tbody>
              {[
                { n: "Dr. Funke Adeola", e: "funke@holysaviours.edu.ng", r: "Administrator", l: "2 min ago", s: "Active" },
                { n: "Mr. Bello",        e: "bello@holysaviours.edu.ng", r: "Teacher",        l: "12 min ago", s: "Active" },
                { n: "Mrs. Okafor",      e: "adaeze@gmail.com",          r: "Parent",         l: "1 hour ago", s: "Active" },
                { n: "Chidera Okafor",   e: "chidera@holysaviours.edu.ng", r: "Student",      l: "3 hours ago", s: "Active" },
                { n: "Tunde Bakare",     e: "tunde@holysaviours.edu.ng", r: "Super Admin",    l: "Just now", s: "Active" },
                { n: "Aisha Bello",      e: "aisha@holysaviours.edu.ng", r: "Student",        l: "5 days ago", s: "Inactive" },
              ].map((u) => (
                <tr key={u.e} className="border-t">
                  <td className="p-4 font-medium">{u.n}</td>
                  <td className="text-muted-foreground">{u.e}</td>
                  <td><span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-primary">{u.r}</span></td>
                  <td className="text-muted-foreground">{u.l}</td>
                  <td className="p-4 text-right">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${u.s === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>{u.s}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  ),
});
