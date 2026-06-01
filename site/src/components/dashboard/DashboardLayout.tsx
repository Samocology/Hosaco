import { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Search, LogOut, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem { to: string; label: string; icon: React.ComponentType<{ className?: string }>; }

function NavList({ nav, onNavigate }: { nav: NavItem[]; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="mt-4 flex-1 space-y-1">
      {nav.map((item) => {
        const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(`${item.to}/`));
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarInner({ role, name, nav, onNavigate }: { role: string; name: string; nav: NavItem[]; onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <Link to="/" onClick={onNavigate} className="flex items-center gap-2 px-2 py-3 shrink-0">
        <img src={logo} alt="" className="h-8 w-8" />
        <div className="leading-tight">
          <div className="font-display text-sm font-bold">Holy Saviours</div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{role}</div>
        </div>
      </Link>
      <NavList nav={nav} onNavigate={onNavigate} />
      <div className="mt-auto pt-8 rounded-2xl border bg-card p-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
            {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{name}</div>
            <div className="truncate text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
        <Button asChild variant="ghost" size="sm" className="mt-3 w-full justify-start">
          <Link to="/" onClick={onNavigate}><LogOut className="mr-2 h-4 w-4" /> Sign out</Link>
        </Button>
      </div>
    </div>
  );
}

export function DashboardLayout({
  role, name, nav, children,
}: { role: string; name: string; nav: NavItem[]; children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar p-4 lg:flex fixed left-0 top-0 h-screen">
        <SidebarInner role={role} name={name} nav={nav} />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/80 px-4 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 bg-sidebar p-4">
                <SidebarInner role={role} name={name} nav={nav} />
              </SheetContent>
            </Sheet>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search…" className="pl-9" />
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            </Button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
              {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export function StatCard({ label, value, hint, accent }: { label: string; value: string; hint?: string; accent?: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-card">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl font-bold">{value}</div>
      {hint && <div className={`mt-1 text-xs ${accent || "text-muted-foreground"}`}>{hint}</div>}
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
