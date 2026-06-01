import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import campus from "@/assets/campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Holy Saviours College" },
      { name: "description", content: "Our story, mission and values. A Lagos institution shaping leaders since 1969." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <Section eyebrow="Our Story" title="A legacy of faith, learning and leadership.">
        <div className="grid gap-10 lg:grid-cols-2">
          <img src={campus} alt="Campus" loading="lazy" className="h-[420px] w-full rounded-3xl object-cover shadow-elegant" />
          <div className="space-y-4 text-muted-foreground">
            <p>Founded in 1969 by a small community of educators and clergy, Holy Saviours College has grown into one of Lagos' most respected secondary institutions.</p>
            <p>For over five decades we've graduated doctors, engineers, artists, public servants and entrepreneurs — united by character, curiosity and a heart for service.</p>
            <p>Our mission is simple: form the whole person — mind, body and spirit — for a life of purpose.</p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[{n:"1969",l:"Founded"},{n:"55+",l:"Years"},{n:"8k+",l:"Alumni"}].map(s=>(
                <div key={s.l} className="rounded-2xl border bg-card p-4">
                  <div className="text-gradient font-display text-2xl font-bold">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="What we stand for.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {t:"Excellence", b:"Pursuing the highest standards in scholarship, sport and the arts."},
            {t:"Integrity", b:"Honesty and discipline as the foundation of every relationship."},
            {t:"Service", b:"Leadership expressed through care for community and country."},
            {t:"Faith", b:"A spiritual life that anchors and inspires daily action."},
            {t:"Curiosity", b:"A love of learning that lasts a lifetime."},
            {t:"Belonging", b:"A diverse, welcoming family where every student is seen."},
          ].map(v=>(
            <div key={v.t} className="rounded-3xl border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
