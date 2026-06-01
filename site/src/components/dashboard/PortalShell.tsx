import { ReactNode } from "react";
import { DashboardLayout, PageHeader } from "./DashboardLayout";
import { buildNav, ROLE_META, type Role } from "@/lib/portal-nav";

export function PortalShell({
  role, title, subtitle, action, children,
}: { role: Role; title: string; subtitle?: string; action?: ReactNode; children: ReactNode }) {
  const meta = ROLE_META[role];
  return (
    <DashboardLayout role={meta.title} name={meta.name} nav={buildNav(role)}>
      <PageHeader title={title} subtitle={subtitle} action={action} />
      {children}
    </DashboardLayout>
  );
}

export function EmptyHint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed bg-card/60 p-6 text-sm text-muted-foreground">
      {children}
    </div>
  );
}
