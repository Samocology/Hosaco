import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Beaker, Calculator, Globe2, Palette, Music, Cpu } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Holy Saviours College" },
      { name: "description", content: "JSS and SSS programs across Sciences, Commercial and Arts tracks." },
    ],
  }),
  component: Academics,
});

const subjects = [
  { icon: Beaker, t: "Sciences", b: "Biology, Chemistry, Physics, Further Maths" },
  { icon: Calculator, t: "Commercial", b: "Accounting, Economics, Commerce, Business" },
  { icon: Globe2, t: "Languages", b: "English, French, Yoruba, Igbo, Hausa" },
  { icon: Palette, t: "Arts", b: "Literature, History, Government, Fine Art" },
  { icon: Music, t: "Performing Arts", b: "Music, Drama, Choir, Dance" },
  { icon: Cpu, t: "Technology", b: "Coding, Robotics, Digital Literacy" },
];

function Academics() {
  return (
    <SiteLayout>
      <Section eyebrow="Academics" title="A curriculum that meets every student where they are." description="From foundational JSS years to specialised SSS tracks — we challenge, support and prepare students for the world ahead.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map(s=>(
            <div key={s.t} className="rounded-3xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border bg-gradient-soft p-10">
          <h3 className="font-display text-2xl font-bold">Tracks at a glance</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {t:"Junior (JSS 1–3)", b:"A broad foundation in core disciplines, with extensive co-curricular exposure."},
              {t:"Senior – Sciences", b:"Medicine, Engineering and STEM university preparation."},
              {t:"Senior – Commercial & Arts", b:"Law, Economics, Humanities and the creative disciplines."},
            ].map(t=>(
              <div key={t.t} className="rounded-2xl border bg-card p-5">
                <div className="text-sm font-semibold text-primary">{t.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{t.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className="bg-gradient-primary text-primary-foreground"><Link to="/admissions">Apply for admission</Link></Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
