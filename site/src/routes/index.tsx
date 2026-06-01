import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles, Users, BookOpen, Trophy, ShieldCheck, HeartHandshake, Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/hero-students.jpg";
import campusImg from "@/assets/campus.jpg";
import scienceImg from "@/assets/science-lab.jpg";
import classroomImg from "@/assets/classroom.jpg";
import sportsImg from "@/assets/sports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holy Saviours College — Shaping Future Leaders Since 1969" },
      { name: "description", content: "A premier secondary college in Lagos. Rigorous academics, character, faith, and a vibrant community — established 1969." },
      { property: "og:title", content: "Holy Saviours College — Lagos" },
      { property: "og:description", content: "Shaping future leaders since 1969." },
    ],
  }),
  component: Home,
});

const reasons = [
  { icon: GraduationCap, title: "Academic Excellence", body: "Top WAEC results year on year and a curriculum that prepares students for global universities." },
  { icon: ShieldCheck, title: "Safe & Nurturing", body: "Modern facilities, attentive staff and a culture of dignity, respect and pastoral care." },
  { icon: HeartHandshake, title: "Character & Faith", body: "Rooted in service and integrity — we shape minds and form the whole person." },
  { icon: Sparkles, title: "Modern Facilities", body: "Smart classrooms, science labs, library and a thriving sports & arts programme." },
];

const programs = [
  { tag: "Junior", title: "JSS 1 – 3", body: "A broad foundation in sciences, languages, humanities and the arts.", img: classroomImg },
  { tag: "Senior", title: "SSS 1 – 3", body: "Sciences, Commercial and Arts tracks with university-prep support.", img: scienceImg },
  { tag: "Beyond", title: "Sports & Arts", body: "Football, basketball, choir, drama, robotics, debate and more.", img: sportsImg },
];

const testimonials = [
  { quote: "My daughter blossomed at Holy Saviours. The teachers are incredible and the portal keeps us in the loop every day.", name: "Mrs. Adaeze O.", role: "Parent, SSS 2" },
  { quote: "From the science lab to the football pitch, every day pushes me to be better. I love it here.", name: "Tomiwa A.", role: "Head Boy, SSS 3" },
  { quote: "A school with discipline, warmth and excellence in equal measure. We made the right choice.", name: "Mr. & Mrs. Bello", role: "Parents" },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur"
            >
              <Star className="h-3.5 w-3.5 text-primary" />
              Established 1969 · Lagos, Nigeria
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Shaping <span className="text-gradient">Future Leaders</span> <br className="hidden sm:block" />
              Since 1969.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              A world-class secondary education rooted in faith, character and excellence — empowering the next generation of Nigerian leaders.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
                <Link to="/admissions">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/academics">Explore Programs</Link>
              </Button>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-6">
              {[
                { n: "55+", l: "Years of Excellence" },
                { n: "1,200+", l: "Students" },
                { n: "98%", l: "WAEC Pass Rate" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.n}</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Holy Saviours College students"
              width={1920}
              height={1280}
              className="relative h-[480px] w-full rounded-3xl object-cover shadow-elegant lg:h-[560px]"
            />
            <div className="glass animate-float absolute -bottom-6 -left-6 hidden rounded-2xl p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Top 10 in Lagos</div>
                  <div className="text-xs text-muted-foreground">Secondary schools, 2024</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About preview */}
      <Section eyebrow="About" title="A heritage of excellence in the heart of Lagos.">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            For over five decades, Holy Saviours College has nurtured young Nigerians into thoughtful, disciplined and faith-filled
            leaders. We blend a rigorous curriculum with rich co-curricular life — sports, the arts, debate, robotics and service —
            so that every student discovers their gift and grows in confidence.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BookOpen, t: "Cambridge-aligned curriculum" },
              { icon: Users, t: "12:1 student–teacher ratio" },
              { icon: ShieldCheck, t: "24/7 campus security" },
              { icon: Sparkles, t: "Smart classrooms & STEM labs" },
            ].map((x) => (
              <li key={x.t} className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-card">
                <x.icon className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{x.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why choose us */}
      <Section eyebrow="Why Holy Saviours" title="The school parents trust. The school students love.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="group h-full border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section eyebrow="Academic Programs" title="A curriculum that goes the distance." description="Designed to ignite curiosity in JSS and open doors to the world's best universities by SSS 3.">
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border bg-card shadow-card transition-all hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                <Link to="/academics" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Voices" title="Loved by parents, students and alumni.">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full rounded-3xl border bg-gradient-soft p-6">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-4 text-base leading-relaxed">{t.quote}</p>
                <div className="mt-6 border-t pt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery preview */}
      <Section eyebrow="Gallery" title="A glimpse into campus life.">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[heroImg, scienceImg, classroomImg, sportsImg, campusImg, scienceImg, classroomImg, heroImg].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="overflow-hidden rounded-2xl aspect-square"
            >
              <img src={src} alt={`Campus ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/gallery">View full gallery <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-elegant sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold sm:text-4xl">Begin your child's journey with us.</h3>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Applications for the 2026/27 session are now open. Limited spaces available across JSS and SSS.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/admissions">Start Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10">
                <Link to="/contact">Book a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
