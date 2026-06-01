import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Video, UploadCloud } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const tutorials = [
  { title: "Solving simultaneous equations", subject: "Mathematics", className: "SSS 2 Science", type: "YouTube", duration: "18 min" },
  { title: "Introduction to organic chemistry", subject: "Chemistry", className: "SSS 3 Science", type: "Uploaded video", duration: "24 min" },
  { title: "Essay structure for WAEC", subject: "English", className: "SSS 1", type: "YouTube", duration: "15 min" },
];

export const Route = createFileRoute("/portal/staff/tutorials")({
  head: () => ({ meta: [{ title: "Tutorials — Staff Dashboard" }] }),
  component: TutorialsPage,
});

function TutorialsPage() {
  const [published, setPublished] = useState(false);
  return (
    <PortalShell role="staff" title="Tutorials" subtitle="Post lessons that students can watch from their portal.">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="grid gap-4 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
            <article key={tutorial.title} className="rounded-2xl border bg-card p-5 shadow-card">
              <div className="grid aspect-video place-items-center rounded-xl bg-gradient-soft">
                <PlayCircle className="h-12 w-12 text-primary" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary"><Video className="h-4 w-4" /> {tutorial.type} · {tutorial.duration}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{tutorial.title}</h3>
              <p className="text-sm text-muted-foreground">{tutorial.subject} · {tutorial.className}</p>
            </article>
          ))}
        </section>
        <form onSubmit={(e) => { e.preventDefault(); setPublished(true); }} className="h-fit rounded-2xl border bg-card p-5 shadow-card">
          <h3 className="mb-4 flex items-center gap-2 font-semibold"><UploadCloud className="h-4 w-4 text-primary" /> Post tutorial</h3>
          <div className="space-y-3">
            <div><Label>Title</Label><Input required placeholder="Lesson title" /></div>
            <div><Label>Class</Label><Input required placeholder="SSS 2 Science" /></div>
            <div><Label>YouTube link</Label><Input placeholder="https://youtube.com/watch?v=..." /></div>
            <div><Label>Or upload video</Label><Input type="file" accept="video/*" /></div>
            <div><Label>Description</Label><Textarea rows={4} placeholder="What should students learn?" /></div>
            {published && <div className="rounded-xl bg-success/10 p-3 text-sm font-medium text-success">Tutorial published to students in demo mode.</div>}
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">Publish tutorial</Button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
