import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export const Route = createFileRoute("/portal/parent/messages")({
  head: () => ({ meta: [{ title: "Messages — Parent Portal" }] }),
  component: () => {
    const threads = [
      { n: "Mr. Bello (Math)", m: "Chidera is doing brilliantly with calculus.", t: "2h" },
      { n: "Mrs. Adeyemi (English)", m: "Please confirm the essay topic by Friday.", t: "1d" },
      { n: "School Office", m: "Mid-term break starts Oct 24.", t: "2d" },
      { n: "Mr. Eze (Physics)", m: "Lab session moved to Wednesday.", t: "4d" },
    ];
    return (
      <PortalShell role="parent" title="Messages" subtitle="Direct line to Chidera's teachers and the school office.">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-2xl border bg-card p-2 shadow-card">
            {threads.map((t, i) => (
              <button key={t.n} className={`w-full rounded-xl p-3 text-left transition-colors hover:bg-accent ${i === 0 ? "bg-accent" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{t.n}</span>
                  <span className="text-[10px] text-muted-foreground">{t.t}</span>
                </div>
                <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{t.m}</p>
              </button>
            ))}
          </div>
          <div className="flex min-h-[420px] flex-col rounded-2xl border bg-card shadow-card">
            <div className="border-b p-4">
              <h3 className="font-semibold">Mr. Bello (Math)</h3>
              <p className="text-xs text-muted-foreground">Last seen recently</p>
            </div>
            <div className="flex-1 space-y-3 p-4">
              <div className="max-w-md rounded-2xl bg-muted px-4 py-2 text-sm">Chidera is doing brilliantly with calculus.</div>
              <div className="ml-auto max-w-md rounded-2xl bg-gradient-primary px-4 py-2 text-sm text-primary-foreground">Thank you so much! Any topic she should focus on at home?</div>
              <div className="max-w-md rounded-2xl bg-muted px-4 py-2 text-sm">Yes — vectors and matrices. I'll send a worksheet.</div>
            </div>
            <div className="flex gap-2 border-t p-3">
              <Input placeholder="Write a message…" />
              <Button className="bg-gradient-primary text-primary-foreground"><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </PortalShell>
    );
  },
});
