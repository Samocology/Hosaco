import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { ResultTable } from "@/components/dashboard/ResultTable";

export const Route = createFileRoute("/portal/student/results")({
  head: () => ({ meta: [{ title: "Results — Student Portal" }] }),
  component: () => (
    <PortalShell role="student" title="Results" subtitle="Term-by-term grades and remarks.">
      <div className="rounded-2xl border bg-card p-5 shadow-card">
        <ResultTable />
      </div>
    </PortalShell>
  ),
});
