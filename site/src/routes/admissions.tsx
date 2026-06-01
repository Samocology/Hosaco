import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Holy Saviours College" },
      { name: "description", content: "Apply for admission to Holy Saviours College. Open for the 2026/27 session." },
    ],
  }),
  component: Admissions,
});

const steps = ["Student", "Parent / Guardian", "Academic", "Review"];

function Admissions() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    firstName: "", lastName: "", dob: "", gender: "",
    parentName: "", parentEmail: "", parentPhone: "", address: "",
    currentSchool: "", classApplying: "", notes: "",
  });

  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setDone(true);
  };

  return (
    <SiteLayout>
      <Section eyebrow="Admissions" title="Begin your application." description="A simple, four-step process. Save your progress and we'll get back within 48 hours.">
        {done ? (
          <div className="mx-auto max-w-xl rounded-3xl border bg-gradient-soft p-10 text-center shadow-elegant">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
              <PartyPopper className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Application received</h3>
            <p className="mt-2 text-muted-foreground">Thank you, {data.parentName || "parent/guardian"}. Our admissions team will contact you shortly at {data.parentEmail || "your email"}.</p>
          </div>
        ) : (
          <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-10">
            {/* Stepper */}
            <ol className="mb-10 flex flex-wrap items-center gap-4">
              {steps.map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <div className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                    i < step ? "bg-success text-success-foreground" : i === step ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-muted text-muted-foreground"
                  }`}>
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={`text-sm font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
                  {i < steps.length - 1 && <div className="hidden h-px w-10 bg-border sm:block" />}
                </li>
              ))}
            </ol>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {step === 0 && (
                  <>
                    <Field label="First name"><Input value={data.firstName} onChange={(e)=>update("firstName", e.target.value)} /></Field>
                    <Field label="Last name"><Input value={data.lastName} onChange={(e)=>update("lastName", e.target.value)} /></Field>
                    <Field label="Date of birth"><Input type="date" value={data.dob} onChange={(e)=>update("dob", e.target.value)} /></Field>
                    <Field label="Gender"><Input value={data.gender} onChange={(e)=>update("gender", e.target.value)} placeholder="Male / Female" /></Field>
                  </>
                )}
                {step === 1 && (
                  <>
                    <Field label="Parent / Guardian name"><Input value={data.parentName} onChange={(e)=>update("parentName", e.target.value)} /></Field>
                    <Field label="Email"><Input type="email" value={data.parentEmail} onChange={(e)=>update("parentEmail", e.target.value)} /></Field>
                    <Field label="Phone"><Input value={data.parentPhone} onChange={(e)=>update("parentPhone", e.target.value)} /></Field>
                    <Field label="Home address" full><Textarea rows={3} value={data.address} onChange={(e)=>update("address", e.target.value)} /></Field>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Field label="Current school"><Input value={data.currentSchool} onChange={(e)=>update("currentSchool", e.target.value)} /></Field>
                    <Field label="Class applying for"><Input value={data.classApplying} onChange={(e)=>update("classApplying", e.target.value)} placeholder="JSS 1, SSS 2…" /></Field>
                    <Field label="Anything we should know?" full><Textarea rows={4} value={data.notes} onChange={(e)=>update("notes", e.target.value)} /></Field>
                  </>
                )}
                {step === 3 && (
                  <div className="sm:col-span-2 space-y-3 rounded-2xl border bg-gradient-soft p-6">
                    <Row k="Student" v={`${data.firstName} ${data.lastName}`} />
                    <Row k="DOB" v={data.dob} />
                    <Row k="Parent" v={`${data.parentName} · ${data.parentEmail}`} />
                    <Row k="Phone" v={data.parentPhone} />
                    <Row k="Class" v={data.classApplying} />
                    <Row k="Current school" v={data.currentSchool} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <Button variant="ghost" onClick={prev} disabled={step === 0}>
                <ArrowLeft className="mr-1 h-4 w-4" /> Back
              </Button>
              {step < steps.length - 1 ? (
                <Button onClick={next} className="bg-gradient-primary text-primary-foreground">Continue <ArrowRight className="ml-1 h-4 w-4" /></Button>
              ) : (
                <Button onClick={submit} className="bg-gradient-primary text-primary-foreground">Submit application</Button>
              )}
            </div>
          </div>
        )}
      </Section>
    </SiteLayout>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label className="mb-1.5 block text-sm">{label}</Label>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v || "—"}</span>
    </div>
  );
}
