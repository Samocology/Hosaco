import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";

const posts = [
  { t:"Class of 2025 graduates 142 scholars", d:"July 12, 2025", img: campus, e:"Celebrating a record-breaking cohort with 17 university scholarships." },
  { t:"Robotics team wins Lagos State finals", d:"May 30, 2025", img: lab, e:"Our JSS robotics team beat 24 schools in this year's championship." },
  { t:"Inter-house sports — Purple House defends title", d:"March 18, 2025", img: sports, e:"A weekend of athletics, music and family — Purple wins again." },
];

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News — Holy Saviours College" }, { name: "description", content: "Latest news and stories from our campus." }] }),
  component: News,
});

function News() {
  return (
    <SiteLayout>
      <Section eyebrow="News & Stories" title="What's happening on campus.">
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map(p => (
            <article key={p.t} className="overflow-hidden rounded-3xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <img src={p.img} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.d}</div>
                <h3 className="mt-2 font-display text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
