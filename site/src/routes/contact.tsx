import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Holy Saviours College" }, { name: "description", content: "Get in touch with our admissions and front office team." }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <Section eyebrow="Contact" title="We'd love to hear from you.">
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={(e)=>{ e.preventDefault(); (e.target as HTMLFormElement).reset(); }}
            className="space-y-4 rounded-3xl border bg-card p-8 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>Full name</Label><Input required className="mt-1.5" /></div>
              <div><Label>Email</Label><Input required type="email" className="mt-1.5" /></div>
            </div>
            <div><Label>Subject</Label><Input className="mt-1.5" /></div>
            <div><Label>Message</Label><Textarea rows={5} required className="mt-1.5" /></div>
            <Button type="submit" className="bg-gradient-primary text-primary-foreground">Send message</Button>
          </form>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border shadow-card">
              <iframe
                title="Holy Saviours College map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.32%2C6.58%2C3.40%2C6.62&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, t: "Address", b: "12 Saviour's Way, Ikeja, Lagos" },
                { icon: Mail, t: "Email", b: "hello@holysaviours.edu.ng" },
                { icon: Phone, t: "Phone", b: "+234 (0)1 555 0169" },
                { icon: Clock, t: "Hours", b: "Mon – Fri · 8am – 4pm" },
              ].map(i => (
                <div key={i.t} className="rounded-2xl border bg-card p-5">
                  <i.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-sm font-semibold">{i.t}</div>
                  <div className="text-sm text-muted-foreground">{i.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
